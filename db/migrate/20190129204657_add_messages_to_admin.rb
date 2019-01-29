class AddMessagesToAdmin < ActiveRecord::Migration[5.2]
  def change
    add_column :admins, :messages, :text
  end
end
