import React from 'react'

const BioTab = (props) => {
  return (
    <div className="column is-three-fifths">
    {props.description.lastfmCaller.bio}
    </div>
  )
}

export default BioTab
