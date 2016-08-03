class ChangeDataTypeOfColumnInRooms < ActiveRecord::Migration
  def up
    change_column :rooms, :check_in, :integer
    change_column :rooms, :check_out, :integer
  end
  def down
    change_column :rooms, :check_in, :datetime
    change_column :rooms, :check_out, :datetime
  end
end
