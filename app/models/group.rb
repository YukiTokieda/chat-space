class Group < ApplicationRecord
  has_many :menbers
  has_many :users,through: :menbers
  has_many :messages

  validates :name, presence: true
end