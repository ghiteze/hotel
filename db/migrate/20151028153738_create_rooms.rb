class CreateRooms < ActiveRecord::Migration
  def change
    create_table :rooms do |t|
      t.integer :customer_id
      t.integer :accommodation_id
      t.datetime :check_in
      t.datetime :check_out

      t.timestamps null: false
    end
  end
end
