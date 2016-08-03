class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.string :token
      t.integer :customer_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
