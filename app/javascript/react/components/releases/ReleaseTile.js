import React from "react";

const ReleaseTile = ({title, original_release_year, release_type, release_id, label_id}) => {
  return (
    <div className="column is-one-third m-t-lg">
      <div className="card has-background-light">
        <p>{release_type}</p>
        <figure className="image is-48by48 m-sm">
          <img
            src=""
            className="card-image"
            alt="Cover Image"
          />
        </figure>
        <h4 className="card-header-title">{title} - {original_release_year}</h4>
        <p className="pl-4">Short Description</p>
        <p className="center">Associated Label - Cat Number</p>
        <p className="center">Associated Tags</p>
      </div>
    </div>
  );
};

export default ReleaseTile;
