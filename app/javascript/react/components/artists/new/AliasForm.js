import React from "react";

const AliasForm = (props) => {
  let handleChange = (event) => {
    props.handleInputChange(event.target.value);
  };
  
  return (
    <label htmlFor="alias">
      <input
        key={props.id}
        type="text"
        id={`alias ${props.id}`}
        name="alias"
        size="50"
        placeholder="Alias"
        onChange={handleChange}
        value={props.alias}
      />
    </label>
  );
};

export default AliasForm;
