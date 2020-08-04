import React from "react";
import LabelTile from "../../labels/LabelTile";
import ArtistIndexTile from "../../artists/index/ArtistIndexTile";
const ReleaseCredits = (props) => {
  const labelListingArray = props.labels.map((label) => {
    return (
      <LabelTile
        key={label.id}
        name={label.name}
        description={label.description}
        id={label.id}
      />
    );
  });
  const artistListingArray = props.artists.map((artist) => {
    return (
      <ArtistIndexTile
        id={artist.id}
        key={artist.id}
        name={artist.name}
        description={artist.description}
        img={artist.img}
      />
    );
  });
  return (
    <div className="columns">
      <div className="column m-l-lg">
        <p className="has-text-light has-text-weight-bold">Artists:</p>
        {artistListingArray}
      </div>

      <div className="column">
        <p className="has-text-light has-text-weight-bold">Labels:</p>
        {labelListingArray}
      </div>
    </div>
  );
};

export default ReleaseCredits;
