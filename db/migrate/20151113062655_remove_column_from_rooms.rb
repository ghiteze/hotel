class RemoveColumnFromRooms < ActiveRecord::Migration
  def change
    remove_column :rooms, :customer_id
  end
end
