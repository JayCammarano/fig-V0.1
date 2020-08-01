class Release < ApplicationRecord
  belongs_to :artist
  has_and_belongs_to_many :labels, join_table: "labels_releases"
  has_and_belongs_to_many :tags, join_table: "releases_tags"


end
