class Release < ApplicationRecord
  belongs_to :artist
  has_and_belongs_to_many :releases
  has_many :tags

end
