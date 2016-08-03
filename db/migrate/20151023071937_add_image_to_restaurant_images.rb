class AddImageToRestaurantImages < ActiveRecord::Migration
  def up
    add_attachment :restaurant_images, :image
  end

  def down
    remove_attachment :restaurant_images, :image
  end
end
