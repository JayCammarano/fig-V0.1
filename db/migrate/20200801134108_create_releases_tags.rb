class CreateReleasesTags < ActiveRecord::Migration[5.2]
  def change
    create_table :releases_tags, :id => false do |t|
      t.belongs_to :release
      t.belongs_to :tag
    end
  end
end
