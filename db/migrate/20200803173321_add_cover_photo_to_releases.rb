class AddCoverPhotoToReleases < ActiveRecord::Migration[5.2]
  def change
    add_column :releases, :cover_photo, :string
  end
end
