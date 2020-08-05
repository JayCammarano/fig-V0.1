import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";
import MultipleArtistFields from "./MultipleArtistFields";

const ReleaseNewForm = (props) => {
  let artistID = props.match.params.id;
  const [releaseRecord, setReleaseRecord] = useState({
    title: "",
    description: "",
    artists: [{artistID}],
  });
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState("");

  const validForSubmission = () => {
    let nameError = "Name can't be blank.";
    if (!releaseRecord.name) {
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
    fetch(`/api/v1/artists/1/releases`, {
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
    return <Redirect to="/artists" />;
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
    <div>
      <h1 className="title has-text-light center pt-4">Add A New Release</h1>
      <section className="container is-6 center">
        <form onSubmit={onSubmitHandeler}>
          <div className="column is-4">
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
