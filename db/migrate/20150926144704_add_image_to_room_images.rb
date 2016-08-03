class AddImageToRoomImages < ActiveRecord::Migration
  def up
    add_attachment :room_images, :image
  end

  def down
    remove_attachment :room_images, :image
  end
end
