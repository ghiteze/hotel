class CreateRestaurantImages < ActiveRecord::Migration
  def change
    create_table :restaurant_images do |t|

      t.timestamps null: false
    end
  end
end
