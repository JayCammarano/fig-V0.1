class Label < ApplicationRecord
  validates :name, presence: true, uniqueness: { case_sensitive: false }
  has_many :images, as: :imageable


  has_and_belongs_to_many :releases

end
