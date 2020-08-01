class CreateLabels < ActiveRecord::Migration[5.2]
  def change
    create_table :labels do |t|
      t.string :name, null: false
      t.text :description
      t.belongs_to :release, null: false
      
      t.timestamps
    end
  end
end
