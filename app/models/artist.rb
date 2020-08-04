class Artist < ApplicationRecord
  validates :name, presence: true

  has_and_belongs_to_many :releases 
  has_many :labels, through: :releases
  has_many :tags, through: :releases

  def add_to_alias_array(name, object)
    aliases = object["alias"]
    aliases << name
    object["alias"] = aliases
  end
  
end
