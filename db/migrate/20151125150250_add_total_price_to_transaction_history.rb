class AddTotalPriceToTransactionHistory < ActiveRecord::Migration
  def change
    add_column :transaction_histories, :total_price, :integer
  end
end
