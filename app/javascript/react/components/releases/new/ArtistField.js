import React from "react";

const ArtistField = (props) => {
  let handleChange = (event) => {
    props.handleArtistChange(event);
  };

  return (
    <div>
      <label htmlFor="artist">
        <input
          key={props.id}
          type="text"
          id={props.id}
          name="artists"
          size="50"
          placeholder="Artist"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default ArtistField;
