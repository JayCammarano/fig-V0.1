class Label < ApplicationRecord
  has_and_belongs_to_many :releases, join_table: "labels_releases"

end
