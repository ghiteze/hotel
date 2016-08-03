class CreateSpaBookings < ActiveRecord::Migration
  def change
    create_table :spa_bookings do |t|
      t.integer :spa_id
      t.integer :package

      t.timestamps null: false
    end
  end
end
