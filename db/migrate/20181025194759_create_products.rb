class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :price
      t.string :description
      t.string :img_url
      t.boolean :for_sale, :default => true

      t.timestamps
    end
  end
end
