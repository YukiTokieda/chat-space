class CreateMenbers < ActiveRecord::Migration[5.0]
  def change
    create_table :menbers do |t|
      t.integer :uers_id
      t.integer :groups_id
      t.timestamps
    end
  end
end
