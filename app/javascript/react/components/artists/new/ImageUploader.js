import React from 'react'
import Dropzone from "react-dropzone";


const ImageUploader = (props) => {
  const handleFileUpload = (acceptedFiles) => {
    props.setArtistRecord({
      ...props.artistRecord,
      image: acceptedFiles[0]
    })
  }
  return (
    <Dropzone onDrop={handleFileUpload}>
    {({ getRootProps, getInputProps }) => (
      <section>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>
            Drag 'n' drop some files here, or click to select files
          </p>
        </div>
      </section>
    )}
  </Dropzone>

  )
}

export default ImageUploader
