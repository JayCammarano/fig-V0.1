import React, { useState } from "react";
import ArtistField from "./ArtistField";

const multipleArtistFields = (props) => {
  // number of fields to make state
  const [artistFields, setArtistFields] = useState(["input"]);

 // onClick function that adds an entry to state
  const addArtistField = (event) => {
    let totalFields = ["input"];
    artistFields.forEach((artistFields) => {
      totalFields.push(artistFields);
    });
    setArtistFields(totalFields);
  };

  // define n for field id
  let n = 0;
  // artistField is iterrated through and each "input" entry creates and ArtistField Component
  let artistForms = artistFields.map((inputField) => {
    n = n + 1;

    return (
      <ArtistField
        handleArtistChange={props.handleArtistChange}
        artist={props.releaseRecord.artists}
        key={n}
        id={n}
        value={props.releaseRecord.artists[`${self.id}`]}
      />
    );
  });

  return (
    <div>
      <div>{artistForms}</div>
      <p className="is-primary has-text-weight-bold" onClick={addArtistField}>
        + Add Artist
      </p>
    </div>
  );
};

export default multipleArtistFields;
