class CreateArtistsReleases < ActiveRecord::Migration[5.2]
  def change
    create_table :artists_releases, :id => false do |t|
      t.integer :artist_id
      t.integer :release_id
    end
  end
end
