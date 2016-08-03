class AddImageToSpas < ActiveRecord::Migration
  def up
    add_attachment :spas, :image
  end

  def down
    remove_attachment :spas, :image
  end
end
