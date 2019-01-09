class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.belongs_to :product, index: true
      t.string :width
      t.string :height

      t.timestamps
    end
  end
end
