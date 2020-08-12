import React from "react";

const LabelTile = (props) => {
  return (
    <div key={props.id} className="column is-one-third m-l-lg">
      <div className="card has-background-light">
        <figure className="image is-48by48">
          <img
            src="https://i.imgur.com/mgv7w2I.jpg"
            className="card-image"
            alt="Label Logo"
          />
        </figure>
        <h4 className="card-header-title has-text-dark">{props.name}</h4>
        <p className="has-text-dark center ml-2 mb-2">{props.description}</p>
      </div>
  </div>
  );
};

export default LabelTile;
