class CreateReleasesTags < ActiveRecord::Migration[5.2]
  def change
    create_table :releases_tags, :id => false do |t|
      t.integer :release_id
      t.integer :tag_id
    end
  end
end
