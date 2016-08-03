class CreateLineBookings < ActiveRecord::Migration
  def change
    create_table :line_bookings do |t|
      t.integer :transaction_id
      t.integer :line_bookable_id
      t.string :line_bookable_type

      t.timestamps null: false
    end
  end
end
