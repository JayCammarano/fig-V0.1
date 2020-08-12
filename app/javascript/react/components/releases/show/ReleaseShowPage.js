import React, { useState, useEffect } from "react";
import ReleaseCredits from "./ReleaseCredits";
import ReleaseDescription from "./ReleaseDescription";
import ReleaseTags from "./ReleaseTags";
import SoundCloudEmbed from "./SoundCloudEmbed";
import { Link } from "react-router-dom";
import NavBar from "../../global/navbar/NavBar"
const ReleaseShowPage = (props) => {
  const artistID = props.match.params.artist_id;
  const releaseID = props.match.params.id;
  const [whichTab, setWhichTab] = useState({ id: "description" });
  const changeTabs = (tab) => {
    setWhichTab({ id: tab });
  };
  let defaultRelease = {
    id: "",
    title: "",
    release_type: "",
    embed_url: "",
    original_release_year: "",
    relatedArtists: [{ id: "", name: "", description: "", alias: [] }],
    relatedLabels: [{ name: "" }],
    embed_url: "",
    description: "",
  };

  const [getRelease, setRelease] = useState(defaultRelease);
  useEffect(() => {
    fetch(`/api/v1/artists/${artistID}/releases/${releaseID}`)
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
        setRelease(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  let musicData;
  let creditsClass = "";
  let descriptionClass = "is-active";
  if (getRelease !== defaultRelease) {
    if (whichTab.id === "description") {
      descriptionClass = "is-active";
      creditsClass = "";
      musicData = <ReleaseDescription description={getRelease.description} />;
    } else if (whichTab.id === "credits") {
      descriptionClass = "";
      creditsClass = "is-active";
      musicData = (
        <ReleaseCredits
          artists={getRelease.artistImageCaller}
          labels={getRelease.relatedLabels}
        />
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
              <h1 className="title is-dark pt-4 pl-2 ml-5">
                {getRelease.title}
              </h1>
              <div className="tabs is-4 m-l-md is-boxed is-toggle">
                <ul>
                  <li
                    id="description"
                    className={descriptionClass}
                    onClick={() => changeTabs("description")}
                  >
                    <a>Description</a>
                  </li>
                  <li
                    id="credits"
                    onClick={() => changeTabs("credits")}
                    className={creditsClass}
                  >
                    <a>Credits</a>
                  </li>
                  <li>
                    <Link
                      to={`/artists/${artistID}/releases/${releaseID}/update`}
                    >
                      Edit Release
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>
        <div>
          <div className="columns">
            <SoundCloudEmbed embed_url={getRelease.embed_url}/>
            {musicData}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseShowPage;
