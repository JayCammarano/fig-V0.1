import React from "react";
import { Link } from "react-router-dom";

export const ArtistIndexTile = (props) => {
  
  return (

      <Link to={`/artists/${props.id}`}>
        <div className="card has-background-light">
          <figure className="image is-48by48">
            <img
              src={props.imageCaller}
              className="card-image"
              alt="Artist Image"
            />
          </figure>
          <h4 className="card-header-title has-text-dark">{props.name}</h4>
        </div>
      </Link>
  );
};
export default ArtistIndexTile;
