class CreateMenbers < ActiveRecord::Migration[5.0]
  def change
    create_table :menbers do |t|
      t.integer :uers_id,null: false,unique: true
      t.integer :groups_id,null: false,unique: true
      t.timestamps
    end
  end
end
