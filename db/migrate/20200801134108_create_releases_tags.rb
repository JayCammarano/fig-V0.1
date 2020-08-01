class CreateReleasesTags < ActiveRecord::Migration[5.2]
  def change
    create_table :releases_tags, :id => false do |t|
      t.integer :release_id, null: false
      t.integer :tag_id, null: false
    end
  end
end
