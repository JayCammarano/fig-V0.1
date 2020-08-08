import React from "react";
import ReleaseTile from "../../releases/ReleaseTile";

export const ReleasesTab = (props) => {
  const releaseTiles = props.relatedReleases.map((release) => {
    return (
      <ReleaseTile
        key={release.id}
        title={release.title}
        embed_url={release.embed_url}
        original_release_year={release.original_release_year}
        release_type={release.release_type}
        release_id={release.id}
        label_id={release.label_id}
        artist_id={props.artistID}
      />
    );
  });

  return (
    <div>
      <section className="container">
        <div className="columns features is-multiline">{releaseTiles}</div>
      </section>
    </div>
  );
};
export default ReleasesTab;
