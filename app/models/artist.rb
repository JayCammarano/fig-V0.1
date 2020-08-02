class Artist < ApplicationRecord
  has_and_belongs_to_many :releases 
  has_many :labels, through: :releases
  has_many :tags, through: :releases

end
