class CreateArtistsReleases < ActiveRecord::Migration[5.2]
  def change
    create_table :artists_releases, :id => false do |t|
      t.belongs_to :artist
      t.belongs_to :release
    end
  end
end
