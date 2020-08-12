import React from "react";

const BioTab = (props) => {
  return (
    <div className="column is-three-fifths">
      <div className="columns">
      <div className="card has-background-light">
        <h4 className="card-header-title has-text-dark">Bio from Last.fm</h4>
        <p className="pl-4 has-text-dark">{props.description.lastfmCaller.bio}</p>
      </div>
    </div>
  </div>
  );
};

export default BioTab;
