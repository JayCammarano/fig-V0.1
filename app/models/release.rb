class Release < ApplicationRecord
  validates :title, presence: true
  validates :release_type, presence: true
  validates :original_release_year, presence: true


  has_and_belongs_to_many :artists
  has_and_belongs_to_many :labels
  has_and_belongs_to_many :tags

end
