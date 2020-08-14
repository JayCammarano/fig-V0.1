import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";
import AliasForm from "./AliasForm";
import NavBar from "../../global/navbar/NavBar";
import ImageUploader from "./ImageUploader";
const ArtistNewForm = () => {
  const [artistRecord, setArtistRecord] = useState({
    name: "",
    description: "",
    alias: [""],
    image: "",
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
    }
  };

  const addNewArtist = (artist) => {
    event.preventDefault();
    let body = new FormData();
    body.append("name", artistRecord.name);
    body.append("description", artistRecord.description);
    artistRecord.alias.forEach((alias) => {
      body.append("alias[]", alias);
    });
    if (artistRecord.images != "") {
      body.append("images", artistRecord.image);
    }
    fetch(`/api/v1/artists/`, {
      method: "POST",
      body: body,
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
    let alias = artistRecord.alias;
    alias[event.currentTarget.id] = event.currentTarget.value;

    setArtistRecord({
      ...artistRecord,
      alias,
    });
  };
  let n = 0;
  let aliasForms = aliasFields.map((inputField) => {
    n = n + 1;

    return (
      <AliasForm
        handleAliasChange={handleAliasChange}
        aliases={artistRecord.alias}
        key={n}
        id={n}
        value={artistRecord.alias[`${self.id}`]}
      />
    );
  });

  return (
    <div>
      <NavBar />
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
          <ImageUploader
            setArtistRecord={setArtistRecord}
            artistRecord={artistRecord}
          />

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
