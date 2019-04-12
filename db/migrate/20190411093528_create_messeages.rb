class CreateMesseages < ActiveRecord::Migration[5.0]
  def change
    create_table :messeages do |t|

      t.timestamps
    end
  end
end
