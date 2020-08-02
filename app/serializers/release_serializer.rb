class ReleaseSerializer < ActiveModel::Serializer
  attributes :id, :title, :release_type, :embed_url, :original_release_year, :label_id, :tag_id
  has_many :labels
  has_many :tags

end
