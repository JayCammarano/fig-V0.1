import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReleaseTile from "../../releases/ReleaseTile";
import { Link } from "react-router-dom";
import ReleasesTab from "./ReleasesTab";
import BioTab from "./BioTab";
import LabelsTab from "./LabelsTab";
const ArtistShowPage = (props) => {
  let artistID = props.match.params.id;
  const [whichTab, setWhichTab] = useState({ id: "releases" });
  const [renderTab, setRenderTab] = useState("");

  const changeTabs = (tab) => {
    setWhichTab({ id: tab });
  };
  const defaultArtist = {
    id: "",
    alias: [],
    name: "",
    description: "",
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
          relatedReleases={getArtist.relatedReleases}
          artistID={artistID}
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
        <section>
          <div>
            <section className="hero is-dark">
              <h1 className="title is-dark pt-4 pl-2 ml-5">{getArtist.name}</h1>
              <div className="column is-4">
                <div className="tabs is-4 is-boxed is-toggle">
                  <ul>
                    <li
                      id="bio"
                      className={bioClass}
                      onClick={() => changeTabs("bio")}
                    >
                      <a>Bio</a>
                    </li>
                    <li
                      id="releases"
                      onClick={() => changeTabs("releases")}
                      className={releaseClass}
                    >
                      <a>Releases</a>
                    </li>
                    <Link
                      className=""
                      to={`/artists/${artistID}/update`}
                    >
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
            <div id="tabsHere">{musicData}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArtistShowPage;
