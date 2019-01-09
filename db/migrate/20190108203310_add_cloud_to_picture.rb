class AddCloudToPicture < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :cloud, :string
  end
end
