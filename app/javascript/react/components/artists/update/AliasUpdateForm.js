import React from "react";

const ArtistField = (props) => {
  let handleChange = (event) => {
    props.handleAliasChange(event);
  };

  return (
    
    <label htmlFor="Alias">
      <input
        key={props.id}
        type="text"
        id={props.id}
        name="Alias"
        size="50"
        className="input "
        placeholder="Alias"
        onChange={handleChange}
        value={props.value}
      />
    </label>
  );
};

export default ArtistField;
