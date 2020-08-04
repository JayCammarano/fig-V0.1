import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LabelTile from "../../labels/LabelTile";

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
  });
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

  const labelListingArray = getRelease.relatedLabels.map((label) => {
    return (
      <LabelTile
        key={label.id}
        name={label.name}
        description={label.description}
      />
    );
  });
  return (
    <div>
      <div>
        <section>
          <div>
            <section className="hero is-dark">
              <h1 className="title is-dark pt-4 pl-2 ml-5">
                {getRelease.title}
              </h1>
              <div className="column is-4 is-one-half">
                <div className="tabs is-4 is-boxed is-toggle">
                  <ul>
                    <li className="is-active">
                      <a>Description</a>
                    </li>
                    <li>
                      <a>Credits</a>
                    </li>
                    <li>
                      <a>Tags</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section>
          <div className="">
            <p>{getRelease.description}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReleaseShowPage;
