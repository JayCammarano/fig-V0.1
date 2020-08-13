class ArtistReleasesSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :lastfmCaller, :releaseImageCaller, :associatedAliases

  def associatedAliases
    object.aliases.each do |alt_name|
      alt_name.alt_name
    end
  end
end