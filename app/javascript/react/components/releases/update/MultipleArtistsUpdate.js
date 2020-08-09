import React, { useState, useEffect } from "react";
import ArtistField from "../new/ArtistField";
const MultipleArtistsUpdate = (props) => {
  const [artistFields, setArtistFields] = useState(["input"]);
  let totalFields = [""];
  const addArtistField = (event) => {
    artistFields.forEach((artistFields) => {
      totalFields.push(artistFields);
    });
    setArtistFields(totalFields);
  };
  let artistForms;
  let n = -1;
  
  // artistField is iterrated through and each "input" entry creates and ArtistField Component
  const inputOldArtists = () => {
    artistForms = artistFields.map((inputField) => {
      n = n + 1;
      return (
        <div>
          <ArtistField
            handleArtistChange={props.handleArtistChange}
            artist={props.releaseRecord.relatedArtists}
            key={n}
            id={n}
            value={props.releaseRecord.relatedArtists[`${n}`].name}
          />
        </div>
      );
    });
  };
  useEffect(() => {
    if (props.releaseRecord != props.defaultRelease) {
      addArtistField;
      inputOldArtists
    }
  }, [props.renderArtistNow]);
  artistForms = artistFields.map((inputField) => {
    n = n + 1;
    return (
      <div>
        <ArtistField
          handleArtistChange={props.handleArtistChange}
          artist={props.releaseRecord.relatedArtists}
          key={n}
          id={n}
          value={props.releaseRecord.relatedArtists[`${n}`].name}
        />
      </div>
    );
  });

  return (
    <div>
      {artistForms}
      <p className="is-primary has-text-weight-bold" onClick={addArtistField}>
        + Add Artist
      </p>
    </div>
  );
};

export default MultipleArtistsUpdate;
