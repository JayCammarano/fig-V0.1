class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :tag, null: false
      t.belongs_to :release

      t.timestamps
    end
  end
end
