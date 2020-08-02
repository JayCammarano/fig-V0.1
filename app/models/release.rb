class Release < ApplicationRecord
  has_and_belongs_to_many :artists
  has_and_belongs_to_many :labels
  has_and_belongs_to_many :tags

end
