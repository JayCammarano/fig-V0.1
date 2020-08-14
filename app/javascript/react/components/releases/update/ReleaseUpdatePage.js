import React, { useState, useEffect } from "react";
import MultipleArtistsUpdate from "./MultipleArtistsUpdate";
import { Redirect } from "react-router-dom";
const ReleaseUpdatePage = (props) => {
  const artistID = props.artistID
  const releaseID = props.releaseID
  const defaultRelease = {
    title: "",
    description: "",
    relatedArtists: [{ id: "", name: "", description: "", alias: [] }],
    release_type: "Album",
    original_release_year: 2020,
  };
  const [releaseRecord, setReleaseRecord] = useState(defaultRelease);
  const [renderArtistsNow, setRenderArtistsNow] = useState(false);
  const [errors, setErrors] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    fetch(`/api/v1/artists/${artistID}/releases/${releaseID}`)
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
        setReleaseRecord(body);
        setRenderArtistsNow(true);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    addNewRelease(releaseRecord);
  };
  const handleInputChange = (event) => {
    setReleaseRecord({
      ...releaseRecord,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };
  const handleArtistChange = (event) => {
    let artists = releaseRecord.artists;
    artists[event.currentTarget.id] = event.currentTarget.value;

    setReleaseRecord({
      ...releaseRecord,
      artists,
    });
  };

  const addNewRelease = (release) => {
    fetch(`/api/v1/artists/${artistID}/releases/${releaseID}`, {
      method: "PATCH",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(release),
    })
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
        setShouldRedirect(true);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };
  if (shouldRedirect) {
    return <Redirect to={`/artists/${artistID}/releases/${releaseID}`} />;
  }
  <MultipleArtistsUpdate
    renderArtistsNow={renderArtistsNow}
    defaultRelease={defaultRelease}
    handleArtistChange={handleArtistChange}
    releaseRecord={releaseRecord}
  />;
  return (
        <form onSubmit={onSubmitHandeler} >
          <div className="column center">
            <h1 className="title has-text-light center pt-4">Update Release</h1>
            <label htmlFor="release_type">
              <select
                type="text"
                id="release_type"
                name="release_type"
                onChange={handleInputChange}
                value={releaseRecord.release_type}
              >
                <option value="Album">Album</option>
                <option value="EP">EP</option>
                <option value="Single">Single</option>
                <option value="Dj Set">EP</option>
                <option value="Anthology">Anthology</option>
                <option value="Compilation">Compilation</option>
                <option value="Mixtape">Mixtape</option>
                <option value="Demo">Demo</option>
                <option value="Concert Recording">Concert Recording</option>
              </select>
            </label>
            <br />
            <label htmlFor="name">
              <input
                type="text"
                id="title"
                name="title"
                size="50"
                className="is-rounded"
                placeholder="Release Title (required)"
                onChange={handleInputChange}
                value={releaseRecord.title}
              />
            </label>
            <p className="center has-text-warning">{errors}</p>

            <label htmlFor="description">
              <input
                type="text"
                id="description"
                size="50"
                name="description"
                placeholder="Description"
                onChange={handleInputChange}
                value={releaseRecord.description}
              />
            </label>
            <br />
            <label htmlFor="original_release_year">
              <input
                type="text"
                size="4"
                id="original_release_year"
                name="original_release_year"
                placeholder="Year"
                onChange={handleInputChange}
                value={releaseRecord.original_release_year}
              />
            </label>
          </div>
          <div className="column is-4">
            <div className="button-group">
              <input
                type="submit"
                className="button is-primary has-text-weight-bold"
                onClick={onSubmitHandeler}
                value="Submit"
              />
            </div>
          </div>
        </form>
  );
};

export default ReleaseUpdatePage;
