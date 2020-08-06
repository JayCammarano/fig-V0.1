import React, { useState } from "react";

const SoundCloudEmbed = (props) => {
  //Get the SoundCloud URL
  const [iFrame, setiFrame] = useState("");
  const url = "https://soundcloud.com/epitaph-records/this-wild-life-history";
  //Get the JSON data of song details with embed code from SoundCloud oEmbed

  fetch(
    `https://soundcloud.com/oembed?format=json&url=${url}&iframe=true`,
    {
      method: "POST",
    }
  )
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
      setiFrame(body);
    });
    let oEmbed = iFrame.html
  return (
  <div className="column is-two-fifths">
    <div dangerouslySetInnerHTML={{ __html: oEmbed }}/>
  </div>)
};

export default SoundCloudEmbed;