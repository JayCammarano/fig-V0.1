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
        imageCaller={artist.image}
      />
    );
  });
  return (
    <div className="" >
      <div className="columns is-multiline p-t-lg">
        <p className="has-text-light has-text-weight-bold m-l-xl">Artists:</p>
        {artistListingArray}
        </div>
    </div>
  );
};

export default ReleaseCredits;
