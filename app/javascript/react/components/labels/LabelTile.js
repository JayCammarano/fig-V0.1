import React from "react";

const LabelTile = (props) => {
  return (
    <div className="column is-two-fifths m-t-lg">
      <div className="card has-background-light">
        <figure className="image is-48by48 m-sm">
          <img src="" className="card-image" alt="Label Logo" />
        </figure>
        <h4 className="card-header-title has-text-dark">{props.name}</h4>
        <div className="has-text-grey m-md">{props.description}</div>
      </div>
    </div>
  );
};

export default LabelTile;
