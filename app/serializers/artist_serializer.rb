class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :alias, :name, :description, :alias
  has_many :releases 

end
