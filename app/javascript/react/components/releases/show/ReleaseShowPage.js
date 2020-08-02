import React, {useState, useEffect} from 'react'

const ReleaseShowPage = (props) => {
  let artistID = props.match.params.id;

  const [getRelease, setRelease] = useState({
    id: "",
    alias: [],
    name: "",
    description: "",
    releases: [
      {
        id: "",
        title: "",
        release_type: "",
        embed_url: "",
        original_release_year: "",
        label_id: "",
        tag_id: "",
      },
    ],
});
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
      setRelease(body);
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
}, []);


  return (
    <div>
      
    </div>
  )
}

export default ReleaseShowPage
