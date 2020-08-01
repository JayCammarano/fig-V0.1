class CreateLabelsReleases < ActiveRecord::Migration[5.2]
  def change
    create_table :labels_releases, :id => false do |t|
      t.integer :label_id, null: false
      t.integer :release_id, null: false

    end
  end
end
