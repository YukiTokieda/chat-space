class CreateMenbers < ActiveRecord::Migration[5.0]
  def change
    create_table :menbers do |t|
      t.references :uers,null: false,unique: true
      t.references :groups,null: false,unique: true
      t.timestamps
    end
  end
end
