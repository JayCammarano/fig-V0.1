class ArtistReleasesSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :relatedReleases, :lastfmCaller

  def relatedReleases
    object.releases.each do |release|
        release.title
        release.description
        release.labels
    end
  end
end