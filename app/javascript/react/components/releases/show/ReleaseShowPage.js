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
    embed_url
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
    <div className="columns">
      <div className="column is-one-third m-lg">
        <div className="card has-background-light">
          <p className="title has-text-weight-bold has-text-grey m-sm">
            {getRelease.title}
          </p>
          <figure className="image is-48by48 m-sm">
            <img src="" className="card-image" alt="Cover Image" />
          </figure>
          <p className="pl-4 has-text-dark">{getRelease.description}</p>

          <p className="center">Associated Tags</p>
        </div>
      </div>
      <div className="column is-two-fifths m-lg">
        <p>Embed can go here</p>
        <div className="center">{labelListingArray}</div>
      </div>
    </div>
  );
};

export default ReleaseShowPage;
