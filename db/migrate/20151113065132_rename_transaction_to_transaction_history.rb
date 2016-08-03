class RenameTransactionToTransactionHistory < ActiveRecord::Migration
  def change
    rename_table :transactions, :transaction_histories
  end
end
