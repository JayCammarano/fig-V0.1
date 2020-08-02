class Artist < ApplicationRecord
  has_many :releases 
  has_many :labels, through: :releases
  has_many :tags, through: :releases

end
