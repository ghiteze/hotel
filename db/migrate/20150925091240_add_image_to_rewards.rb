class AddImageToRewards < ActiveRecord::Migration
  def up
    add_attachment :rewards, :image
  end

  def down
    remove_attachment :rewards, :image
  end
end
