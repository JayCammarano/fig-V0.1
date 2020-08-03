class AddLogoPhotoToLabels < ActiveRecord::Migration[5.2]
  def change
    add_column :releases, :label_logo, :string
  end
end
