import React, { useState, useEffect } from "react";
import ArtistIndexTile from "./ArtistIndexTile";
import NavBar from "../../global/navbar/NavBar";

const ArtistIndexContainter = () => {
  const [getArtists, setArtists] = useState([
    { id: "", name: "", description: "" },
  ]);
  useEffect(() => {
    fetch("/api/v1/artists")
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })

      .then((response) => response.json())
      .then((body) => {
        setArtists(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);
  let artistTiles = getArtists.map((artist) => {
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
    <div>
      <NavBar />
      <section className="">
        <h3 className="title pl-2 ml-5 pt-2">Artists</h3>
        <div className="columns is-multiline">{artistTiles}</div>
      </section>
    </div>
  );
};

export default ArtistIndexContainter;
