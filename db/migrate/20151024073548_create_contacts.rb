class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :full_name
      t.string :address
      t.string :phone_number
      t.string :email
      t.string :subject
      t.text :content

      t.timestamps null: false
    end
  end
end
