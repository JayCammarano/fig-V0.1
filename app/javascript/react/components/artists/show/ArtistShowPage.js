import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReleaseTile from "../../releases/ReleaseTile";
import { Link } from "react-router-dom";
import ReleasesTab from "./ReleasesTab";
import BioTab from "./BioTab";
import LabelsTab from "./LabelsTab";
import NavBar from "../../global/navbar/NavBar";
const ArtistShowPage = (props) => {
  let artistID = props.match.params.id;
  const [whichTab, setWhichTab] = useState({ id: "releases" });
  const [renderTab, setRenderTab] = useState("");

  const defaultArtist = {
    id: "",
    alias: [],
    name: "",
    description: "",
    imageCaller: "",
    relatedReleases: [
      {
        id: "",
        title: "",
        release_type: "",
        embed_url: "",
        original_release_year: "",
        label_id: "",
        tag_id: "",
      },
    ],
    
  };
  const [getArtist, setArtist] = useState(defaultArtist);
  const changeTabs = (tab) => {
    setWhichTab({ id: tab });
  };

  useEffect(() => {
    fetch(`/api/v1/artists/${artistID}/`)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })

      .then((response) => response.json())
      .then((body) => {
        setArtist(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);
  let musicData;
  let releaseClass = "is-active";
  let bioClass;
  let labelClass;

  if (getArtist !== defaultArtist) {
    if (whichTab.id === "releases") {
      releaseClass = "is-active";
      bioClass = "";
      labelClass = "";
      musicData = (
        <ReleasesTab
          releases={getArtist.releaseImageCaller}
          artistID={artistID}
          image={getArtist.imageCaller}
          name={getArtist.name}
        />
      );
    } else if (whichTab.id === "bio") {
      releaseClass = "";
      bioClass = "is-active";
      labelClass = "";

      musicData = <BioTab description={getArtist} artistID={artistID} />;
    } else if (whichTab.id === "labels") {
      releaseClass = "";
      bioClass = "";
      labelClass = "is-active";

      musicData = (
        <LabelsTab description={getArtist.description} artistID={artistID} />
      );
    }
  }

  return (
    <div>
      <div>
        <NavBar />
        <section>
          <div>
            <section className="hero is-dark">
              <h1 className=" title is-size-1 is-dark p-t-lg pl-2 ml-5">
                {getArtist.name}
              </h1>
              <div className="column">
                <a className="has-text-light is-size-4 pl-2 ml-5">
                  {getArtist.description}
                </a>
              </div>
              <div className="column is-one-half">
                <div className="tabs is-boxed is-toggle pl-2 ml-5">
                  <ul>
                    <li
                      id="bio"
                      className={bioClass}
                      onClick={() => changeTabs("bio")}
                    >
                      <a>Info</a>
                    </li>
                    <li
                      id="releases"
                      onClick={() => changeTabs("releases")}
                      className={releaseClass}
                    >
                      <a>Releases</a>
                    </li>
                    <Link className="" to={`/artists/${artistID}/update`}>
                      Edit Info
                    </Link>
                    <li>
                      <Link to={`/artists/${artistID}/releases/new`}>
                        Add Release
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {musicData}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArtistShowPage;
