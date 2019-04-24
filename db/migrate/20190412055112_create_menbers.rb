class CreateMenbers < ActiveRecord::Migration[5.0]
  def change
    create_table :menbers do |t|
      t.references :user,null: false,unique: true
      t.references :group,null: false,unique: true
      t.timestamps
    end
  end
end
