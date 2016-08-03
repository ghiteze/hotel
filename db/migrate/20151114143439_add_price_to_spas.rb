class AddPriceToSpas < ActiveRecord::Migration
  def change
    add_column :spas, :price, :integer
  end
end
