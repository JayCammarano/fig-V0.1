import React, { useState, useEffect } from "react";
import ReleaseCredits from "./ReleaseCredits";
import ReleaseDescription from "./ReleaseDescription";
import ReleaseTags from "./ReleaseTags";

const ReleaseShowPage = (props) => {
  const artistID = props.match.params.artist_id;
  const releaseID = props.match.params.id;

  const [getRelease, setRelease] = useState({
    id: "",
    title: "",
    release_type: "",
    embed_url: "",
    original_release_year: "",
    relatedArtists: [{ id: "", name: "", description: "", alias: [] }],
    relatedLabels: [{ name: "" }],
    description: "",
  });
  const [selectedTab, setSelectedTab] = useState("description");

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

  const activeTab = (tab) => {

  }
  return (
    <div>
      <div>
        <section>
          <div>
            <section className="hero is-dark">
              <h1 className="title is-dark pt-4 pl-2 ml-5">
                {getRelease.title}
              </h1>
              <div className="column is-4 is-one-half m-l-lg">
                <div className="tabs is-4 is-boxed is-toggle">
                  <ul>
                    <li id="description" className="is-active" onClick={activeTab("description")}>
                      <a>Description</a>
                    </li>
                    <li id="credits">
                      <a>Credits</a>
                    </li>
                    <li id="tags">
                      <a>Tags</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div id="tab-content">
            <ReleaseDescription description={getRelease.description} />
            <ReleaseCredits artists={getRelease.relatedArtists} labels={getRelease.relatedLabels} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReleaseShowPage;
