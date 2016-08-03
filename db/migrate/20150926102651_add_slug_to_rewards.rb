class AddSlugToRewards < ActiveRecord::Migration
  def change
    add_column :rewards, :slug, :string
  end
end
