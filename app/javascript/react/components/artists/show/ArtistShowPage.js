import React, { useState, useEffect } from "react";
import ReleaseTile from "../../releases/ReleaseTile";

const ArtistShowPage = (props) => {
  let artistID = props.match.params.id;
  const [getArtist, setArtist] = useState({
      id: "",
      alias: [],
      name: "",
      description: "",
      releases: [
        {
          id: "",
          title: "",
          release_type: "",
          embed_url: "",
          original_release_year: "",
          label_id: "",
          tag_id: "",
        },
      ],
  });
  useEffect(() => {
    fetch(`/api/v1/artists/${artistID}/`)
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
        setArtist(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);
  console.log(getArtist);
  const releaseTiles = getArtist.releases.map((release) => {
    return (
      <ReleaseTile
        key={release.id}
        title={release.title}
        embed_url={release.embed_url}
        original_release_year={release.original_release_year}
        release_type={release.release_type}
        release_id={release.id}
        label_id={release.label_id}
      />
    );
  });
  return (
    <div>
      <div>
        <section>
          <div>
            <section className="hero is-dark">
              <h1 className="title is-dark pt-4 pl-2 ml-5">
                {getArtist.name}
              </h1>
              <div className="column is-4 is-one-half">
                <div className="tabs is-4 is-boxed is-toggle">
                  <ul>
                    <li>
                      <a>Bio</a>
                    </li>
                    <li className="is-active">
                      <a>Releases</a>
                    </li>
                    <li>
                      <a>Associated Labels</a>
                    </li>
                    <li>
                      <a>Tags</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="container is-4">
  <div className="columns features is-multiline">{releaseTiles}</div>
        </section>
      </div>
    </div>
  );
};

export default ArtistShowPage;
