class CreateAdmins < ActiveRecord::Migration[5.2]
  def change
    create_table :admins do |t|
      t.string :email
      t.string :password_digest
      t.text :about
      t.boolean :signed_in, default: false

      t.timestamps
    end
  end
end
