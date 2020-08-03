class ArtistReleasesSerializer < ActiveModel::Serializer
  attributes :id, :alias, :name, :description, :relatedReleases
  def relatedReleases
    object.releases.each do |release|
        release.title
        release.description
        release.labels
    end
  end
end