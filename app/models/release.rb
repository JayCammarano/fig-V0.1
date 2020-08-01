class Release < ApplicationRecord
  belongs_to :artist
  has_and_belongs_to_many :labels
  has_and_belongs_to_many :tags


end
