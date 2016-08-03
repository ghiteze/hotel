class AddPriceToGyms < ActiveRecord::Migration
  def change
    add_column :gyms, :price, :integer
  end
end
