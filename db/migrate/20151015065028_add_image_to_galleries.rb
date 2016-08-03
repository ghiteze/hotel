class AddImageToGalleries < ActiveRecord::Migration
  def up
    add_attachment :galleries, :image
  end

  def down
    remove_attachment :galleries, :image
  end
end
