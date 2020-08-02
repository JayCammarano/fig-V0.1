class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :alias, :name, :description
  has_many :releases 

end
