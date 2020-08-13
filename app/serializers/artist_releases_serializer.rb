class ArtistReleasesSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :lastfmCaller, :releaseImageCaller, :imageCaller
end