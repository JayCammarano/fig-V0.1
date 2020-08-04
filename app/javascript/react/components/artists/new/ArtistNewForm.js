import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";
import AliasForm from "./AliasForm";

const ArtistNewForm = () => {
  const [artistRecord, setArtistRecord] = useState({
    name: "",
    description: "",
    alias: [""],
  });
  const [aliasFields, setAliasFields] = useState(["input"]);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState("");


  const validForSubmission = () => {
    let nameError = "Name can't be blank.";
    if (!artistRecord.name) {
      setErrors(nameError);
    } else {
      return true;
    }
  };

  const handleInputChange = (event) => {
    setArtistRecord({
      ...artistRecord,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    if (validForSubmission() === true) {
      addNewArtist(artistRecord);
      debugger;
    }
  };

  const addNewArtist = (artist) => {
    fetch(`/api/v1/artists`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(artist),
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

  const addAliasField = (event) => {
    let totalFields = ["input"];
    aliasFields.forEach((aliasField) => {
      totalFields.push(aliasField);
    });
    setAliasFields(totalFields);
  };
  const handleAliasChange = (event) => {
    

  }
  let n = 0;
  let aliasForms = aliasFields.map((inputField) => {
    n = n + 1;
    return (
      <AliasForm
        handleInputChange={handleInputChange}
        alias = {artistRecord.alias}
        key={n}
        id={n}
      />
    );
  });


  return (
    <div>
      <h1 className="title has-text-light center pt-4">Add A New Artist</h1>

      <p className="center">
        Just adding a new name to an old artist? Add an alias instead!
      </p>
      <section className="container is-6 center">
        <form onSubmit={onSubmitHandeler}>
          <div className="column is-4">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                size="50"
                className="is-rounded"
                placeholder="Artist Name (required)"
                onChange={handleInputChange}
                value={artistRecord.name}
              />
            </label>
            <p className="center has-text-warning">{errors}</p>
          </div>
          <div className="column is-4">
            {aliasForms}
            <p
              className="is-primary has-text-weight-bold"
              onClick={addAliasField}
            >
              + Add Alias
            </p>
          </div>
          <div className="column is-4">
            <label htmlFor="description">
              <input
                type="text"
                id="description"
                size="50"
                name="description"
                placeholder="Description/Bio"
                onChange={handleInputChange}
                value={artistRecord.description}
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

export default ArtistNewForm;
