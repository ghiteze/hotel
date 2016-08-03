class RenameColumnFromLineBooking < ActiveRecord::Migration
  def change
    rename_column :line_bookings, :transaction_id, :transaction_history_id
  end
end
