class AddRestaurantIdToRestaurantImage < ActiveRecord::Migration
  def change
    add_column :restaurant_images, :restaurant_id, :integer
  end
end
