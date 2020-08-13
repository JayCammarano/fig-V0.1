import React from "react";
import Dropzone from "react-dropzone";

const ImageUpdater = () => {
  const handleFileUpload = (acceptedFiles) => {
    props.setArtistRecord({
      ...props.artistRecord,
      image: acceptedFiles[0],
    });
  };
  return (
    <Dropzone onDrop={handleFileUpload}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Add or Change the Artist Image</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default ImageUpdater;
