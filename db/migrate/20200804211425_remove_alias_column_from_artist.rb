class RemoveAliasColumnFromArtist < ActiveRecord::Migration[5.2]
  def down
    remove_column :artists, :alias
  end
end
