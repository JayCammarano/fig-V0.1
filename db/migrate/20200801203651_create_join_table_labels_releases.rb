class CreateJoinTableLabelsReleases < ActiveRecord::Migration[5.2]
  def change
    create_join_table :labels, :releases do |t|
       # t.index [:label_id, :release_id]
       # t.index [:release_id, :label_id]
    end
  end
end
