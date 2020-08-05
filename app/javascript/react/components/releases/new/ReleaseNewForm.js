import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";
import MultipleArtistFields from "./MultipleArtistFields";

const ReleaseNewForm = (props) => {
  let artistID = props.match.params.id;
  const [releaseRecord, setReleaseRecord] = useState({
    title: "",
    description: "",
    artists: [],
    release_type: "Album",
    original_release_year: 2020,
  });
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState("");

  const setArtistInit = (name) => {
    let artists = releaseRecord.artists;
    artists[0] = name;
    setReleaseRecord({
      ...releaseRecord,
      artists,
    });
  };
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
        console.log(body.name);
        setArtistInit(body.name);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const validForSubmission = () => {
    let nameError = "Title can't be blank.";
    if (!releaseRecord.title) {
      setErrors(nameError);
    } else {
      return true;
    }
  };

  const handleInputChange = (event) => {
    setReleaseRecord({
      ...releaseRecord,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    if (validForSubmission() === true) {
      addNewRelease(releaseRecord);
    }
  };

  const addNewRelease = (release) => {
    fetch(`/api/v1/artists/${artistID}/releases`, {
      method: "POST",
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
    return <Redirect to={`/artists/${artistID}/`} />;
  }

  const handleArtistChange = (event) => {
    let artists = releaseRecord.artists;
    artists[event.currentTarget.id] = event.currentTarget.value;

    setReleaseRecord({
      ...releaseRecord,
      artists,
    });
  };

  return (
    <div className="columns">
      <section className="container is-6 center">
        <form onSubmit={onSubmitHandeler}>
          <div className="column center">
            <h1 className="title has-text-light center pt-4">
              Add A New Release
            </h1>
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
            <MultipleArtistFields
              handleArtistChange={handleArtistChange}
              releaseRecord={releaseRecord}
            />

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
      </section>
    </div>
  );
};

export default ReleaseNewForm;
