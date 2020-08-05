import React from "react";

const ArtistField = (props) => {
  let handleChange = (event) => {
    props.handleArtistChange(event);
  };

  return (
    
    <label htmlFor="artist">
      <input
        key={props.id}
        type="text"
        id={props.id}
        name="artists"
        size="50"
        placeholder="Artists"
        onChange={handleChange}
        value={props.value}
      />
    </label>
  );
};

export default ArtistField;
