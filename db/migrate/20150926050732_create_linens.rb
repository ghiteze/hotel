class CreateLinens < ActiveRecord::Migration
  def change
    create_table :linens do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
