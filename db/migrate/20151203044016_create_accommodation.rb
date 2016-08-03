class CreateAccommodation < ActiveRecord::Migration
  def change
    create_table :accommodations do |t|
      t.string :name
      t.string :kind
      t.integer :size
      t.integer :price
      t.text :content
      t.string :slug
      t.integer :number

      t.timestamps null: false
    end
  end
end
