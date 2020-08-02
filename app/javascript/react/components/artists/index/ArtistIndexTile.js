import React from "react";
import { Link } from "react-router-dom";

export const ArtistIndexTile = (props) => {
  return (
    <div className="column is-one-fifth m-l-lg">
      <Link to={"/artists/" + props.id}>
        <div className="card has-background-light">
          <figure className="image is-48by48">
            <img
              src="https://i.imgur.com/mgv7w2I.jpg"
              className="card-image"
              alt="Artist Image"
            />
          </figure>
          <h4 className="card-header-title has-text-dark">{props.name}</h4>
          <p className="has-text-dark center ml-2 mb-2">{props.description}</p>
        </div>
      </Link>
    </div>
  );
};
export default ArtistIndexTile;
