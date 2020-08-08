import React from "react";

const AliasForm = (props) => {
  let handleChange = (event) => {
    props.handleAliasChange(event);
  };

  return (
    <label htmlFor="alias">
      <input
        key={props.id}
        type="text"
        id={props.id}
        name="alias"
        size="50"
        placeholder="Alias"
        onChange={handleChange}
      />
    </label>
  );
};

export default AliasForm;
