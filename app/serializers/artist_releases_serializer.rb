class ArtistReleasesSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :lastfmCaller, :releaseImageCaller

end