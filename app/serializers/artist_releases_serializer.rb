class ArtistReleasesSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :relatedReleases, :lastfmCaller, :associatedAliases

  def associatedAliases
    object.aliases.each do |alt_name|
      alt_name.alt_name
    end
  end
  def relatedReleases
    object.releases.each do |release|
        release.title
        release.description
        release.labels
    end
  end
end