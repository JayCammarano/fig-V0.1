import React from "react";
import ArtistIndexTile from "../../artists/index/ArtistIndexTile"

const ReleaseDescription = (props) => {
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
    <section className="m-t-lg m-r-lg">
      <div className="column is-four-fifths">
        <div className="card has-background-light">
          <h4 className="card-header-title has-text-dark">{props.name}</h4>
          <p className="has-text-dark p-l-md p-b-md">{props.description}</p>
        </div>
      </div>
      <div className="column is-multiline p-t-lg">
        <p className="has-text-light has-text-weight-bold">Artists:</p>
        {artistListingArray}
    </div>


    </section>
  );
};

export default ReleaseDescription;
