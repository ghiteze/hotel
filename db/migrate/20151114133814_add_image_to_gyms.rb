class AddImageToGyms < ActiveRecord::Migration
  def up
    add_attachment :gyms, :image
  end

  def down
    remove_attachment :gyms, :image
  end
end
