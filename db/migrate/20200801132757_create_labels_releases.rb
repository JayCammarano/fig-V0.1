class CreateLabelsReleases < ActiveRecord::Migration[5.2]
  def change
    create_table :labels_releases, :id => false do |t|
      t.belongs_to :label
      t.belongs_to :release

    end
  end
end
