import React, { useState, useEffect } from "react";
import ReleaseCredits from "./ReleaseCredits";
import ReleaseDescription from "./ReleaseDescription";
import ReleaseTags from "./ReleaseTags";
import SoundCloudEmbed from "./SoundCloudEmbed";

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

  const activeTab = (tab) => {};
  return (
    <div>
      <div>
        <section>
          <div>
            <section className="hero is-dark">
              <h1 className="title is-dark pt-4 pl-2 ml-5">
                {getRelease.title}
              </h1>
              <div className="column is-4 is-one-half m-l-lg"></div>
            </section>
          </div>
        </section>
        <div>
          <SoundCloudEmbed />
          <ReleaseDescription description={getRelease.description} />
          <ReleaseCredits
            artists={getRelease.relatedArtists}
            labels={getRelease.relatedLabels}
          />
        </div>
      </div>
    </div>
  );
};

export default ReleaseShowPage;
