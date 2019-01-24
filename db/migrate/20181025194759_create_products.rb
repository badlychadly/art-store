class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price
      t.string :description
      t.string :img_url
      t.boolean :original, :default => true
      t.boolean :prints, :default => true

      t.timestamps
    end
  end
end
