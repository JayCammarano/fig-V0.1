import React, { useState, useEffect } from "react";
import AliasForm from "../new/AliasForm";
import MultipleAliasFields from "./MultipleAliasFields";
import { Redirect } from "react-router-dom";
import ImageUpdater from "./ImageUpdater"
const ArtistUpdateContainer = (props) => {
  let artistID = props.match.params.id;
  const [artistRecord, setArtistRecord] = useState({
    name: "",
    description: "",
    associatedAliases: [""],
  });
  const [aliasFields, setAliasFields] = useState(["input"]);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState("");
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
        debugger;
        setArtistRecord(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const handleInputChange = (event) => {
    setArtistRecord({
      ...artistRecord,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    updateArtist(artistRecord);
  };

  const updateArtist = (artist) => {
    fetch(`/api/v1/artists/${artistID}`, {
      method: "PATCH",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(artistRecord),
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
  const handleAliasChange = (event) => {
    let alias = artistRecord.associatedAliases;
    alias[event.currentTarget.id] = event.currentTarget.value;

    setArtistRecord({
      ...artistRecord,
      alias,
    });
  };
  let n = 0;
  if (shouldRedirect) {
    return <Redirect to={`/artists/${artistID}`} />;
  }

  return (
    <div>
      <h1 className="title has-text-light center pt-4">
        Update {artistRecord.name}
      </h1>
      <section className="container center">
        <form onSubmit={onSubmitHandeler}>
          <div className="column">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                size="50"
                className="input"
                placeholder={artistRecord.name}
                onChange={handleInputChange}
                value={artistRecord.name}
              />
            </label>
          </div>
          <div className="column"></div>
          <div className="column">
            <label htmlFor="description">
              <textarea
                type="text"
                id="description"
                size="50"
                name="description"
                placeholder={artistRecord.description}
                className="input"
                onChange={handleInputChange}
                value={artistRecord.description}
              />
            </label>
          </div>
          <ImageUpdater
            setArtistRecord={setArtistRecord}
            artistRecord={artistRecord}
          />

          <div className="column">
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

export default ArtistUpdateContainer;
