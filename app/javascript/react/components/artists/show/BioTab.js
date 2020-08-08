import React from "react";
import { Link } from "react-router-dom";

const BioTab = (props) => {
  return (
    <div>
      <div className="column is-three-fifths m-l-md">
        <h4 className="subtitle has-text-light has-text-weight-bold">
          Description:
        </h4>
        {props.description.description}
        <br />
       
      </div>
      <div className="column is-three-fifths m-l-md">
        <h4 className="subtitle has-text-light has-text-weight-bold m-t-lg">
          Last.fm Bio:
        </h4>
        {props.description.lastfmCaller.bio}
      </div>
    </div>
  );
};

export default BioTab;
