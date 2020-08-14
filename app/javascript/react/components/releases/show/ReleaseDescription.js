import React from "react";
import ArtistIndexTile from "../../artists/index/ArtistIndexTile";

const ReleaseDescription = (props) => {
  const artistListingArray = props.artists.map((artist) => {
    return (
      <div className="column is-two-fifths">
        <ArtistIndexTile
          id={artist.id}
          key={artist.id}
          name={artist.name}
          description={artist.description}
          imageCaller={artist.image}
        />
      </div>
    );
  });

  return (
    <section className="m-t-lg m-r-lg">
      <div className="column is-four-fifths">
        <div className="card has-background-light">
          <h4 className="card-header-title has-text-dark">{props.name}</h4>
          <p className="has-text-dark has-text-weight-bold is-size-4 p-l-lg p-b-sm">Description:</p>
          <p className="has-text-dark p-l-lg p-b-lg">{props.description}</p>
        </div>
      </div>
      <p className="has-text-light has-text-weight-bold is-size-4 p-l-lg p-b-md">Artists:</p>
      <div className="columns is-multilines p-l-lg">{artistListingArray}</div>
    </section>
  );
};

export default ReleaseDescription;
