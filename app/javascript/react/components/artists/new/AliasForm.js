import React from "react";

const AliasForm = (props) => {
  let handleChange = (event) => {
    debugger
    props.handleInputChange(event.target.value);
    debugger
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
        value={props.alias}
      />
    </label>
  );
};

export default AliasForm;
