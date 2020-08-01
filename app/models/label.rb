class Label < ApplicationRecord
  has_and_belongs_to_many :releases, join_table: "table_name", foreign_key: "object_id"

end
