import React from "react";

const ReleaseDescription = (props) => {
  return (
    <section>
      <div className="has-text-light m-lg">
        <p>{props.description}</p>
      </div>
    </section>
  );
};

export default ReleaseDescription;
