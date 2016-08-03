class CreateSpas < ActiveRecord::Migration
  def change
    create_table :spas do |t|
      t.string :name
      t.string :slug
      t.text :content

      t.timestamps null: false
    end
  end
end
