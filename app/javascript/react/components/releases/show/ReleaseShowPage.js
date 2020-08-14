import React, { useState, useEffect } from "react";
import ReleaseDescription from "./ReleaseDescription";
import ReleaseTags from "./ReleaseTags";
import SoundCloudEmbed from "./SoundCloudEmbed";
import { Link } from "react-router-dom";
import NavBar from "../../global/navbar/NavBar";
import ReleaseUpdatePage from "../update/ReleaseUpdatePage";

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
  let editClass = "";
  let descriptionClass = "is-active";
  if (getRelease !== defaultRelease) {
    if (whichTab.id === "description") {
      descriptionClass = "is-active";
      editClass = "";
      musicData = (
        <ReleaseDescription
          description={getRelease.description}
          artists={getRelease.artistImageCaller}
          labels={getRelease.relatedLabels}
        />
      );
    } else if (whichTab.id === "edit") {
      descriptionClass = "";
      editClass = "is-active";
      musicData = <ReleaseUpdatePage artistID={artistID} releaseID={releaseID} />;
    }
  }

  return (
    <div>
      <div>
        <NavBar />
        <section className="hero is-dark">
          <h1 className="title is-dark pt-4 p-l-lg m-l-lg p-t-sm is-size-1">
            {getRelease.title}
          </h1>
          <div className="tabs is-4 pt-4 p-r-lg m-r-lg is-boxed is-toggle is-one-half is-right">
            <ul>
              <li
                id="description"
                className={descriptionClass}
                onClick={() => changeTabs("description")}
              >
                <a>info</a>
              </li>
              <a>
              <li
                id="edit"
                className={editClass}
                onClick={() => changeTabs("edit")}
              >
                edit release
              </li>
              </a>
            </ul>
          </div>
        </section>
        <div>
          <div className="columns">
            <SoundCloudEmbed embed_url={getRelease.embed_url} />
            {musicData}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseShowPage;
