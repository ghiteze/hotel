class CreateRoomImages < ActiveRecord::Migration
  def change
    create_table :room_images do |t|
      t.integer :room_id
      t.boolean :is_master, :default => false

      t.timestamps null: false
    end
  end
end
