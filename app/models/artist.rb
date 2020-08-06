class Artist < ApplicationRecord
  validates :name, presence: true
  has_and_belongs_to_many :releases 
  has_and_belongs_to_many :aliases
  has_many :labels, through: :releases
  has_many :tags, through: :releases
  
end
