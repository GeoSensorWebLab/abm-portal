class CreateSightingStatus < ActiveRecord::Migration
  def change
    create_table :sighting_statuses do |t|
      t.integer :sighting_id, null: false
      t.string :state, default: "Unreviewed"
      t.timestamps
    end

    add_index :sighting_statuses, :sighting_id, unique: true
  end
end
