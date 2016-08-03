class CreateGymBookings < ActiveRecord::Migration
  def change
    create_table :gym_bookings do |t|
      t.integer :gym_id
      t.integer :package

      t.timestamps null: false
    end
  end
end
