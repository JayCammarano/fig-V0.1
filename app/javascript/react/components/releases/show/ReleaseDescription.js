import React from "react";

const ReleaseDescription = (props) => {
  return (
    <section className="m-t-lg m-r-lg">
      <div className="column is-four-fifths">
        <div className="card has-background-light">
          <h4 className="card-header-title has-text-dark">{props.name}</h4>
          <p className="has-text-dark p-l-md p-b-md">{props.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ReleaseDescription;
