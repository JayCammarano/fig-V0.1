import React, { useState, useEffect } from "react";
import AliasUpdateForm from "./AliasUpdateForm";

const MultipleAliasFields = (props) => {
  const [aliasFields, setAliasFields] = useState(["input"]);
  const [numberOfAliasesOnLoad, setNumberofAliasesOnLoad] = useState("")
  const onLoadAddFields = () => {
    let numberOfEntriesInDb = props.associatedAliases
    numberOfAliasesOnLoad.foreach((alias) => {
      numberOfEntriesInDb.push(alias)
    })
    setNumberofAliasesOnLoad(numberOfEntriesInDb)
    let initAliasForms = numberOfAliasesOnLoad.foreach((inputField) => {
      counter = counter + 1;
      return (
        <div>
          <AliasUpdateForm
            handleAliasChange={props.handleAliasChange}
            aliase={props}
            key={n}
            id={n}
            value={props.associatedAliases[`${n}`].alt_name}
          />
        </div>
      );
    });
  }
  let counter = -1;

  useEffect(() => {
    onLoadAddFields
    
    return () => {
      {initAliasForms}
    }
  }, [])

  const addAliasField = (event) => {
    let totalFields = ["input"];
    aliasFields.forEach((aliasFields) => {
      totalFields.push(aliasFields);
    });
    setAliasFields(totalFields);
  };

  

  let n = -1;
  let aliasForms = aliasFields.map((inputField) => {
    n = n + 1;
    return (
      <div>
        <AliasUpdateForm
          handleAliasChange={props.handleAliasChange}
          aliase={props}
          key={n}
          id={n}
          value={props.associatedAliases[`${n}`]}
        />
      </div>
    );
  });

  return (
    <div>
      <div>
        {aliasForms}</div>
      <p className="is-primary has-text-weight-bold" onClick={addAliasField}>
        + Add Alias
      </p>
    </div>
  );
};

export default MultipleAliasFields;
