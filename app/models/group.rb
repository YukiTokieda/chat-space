class Group < ApplicationRecord
  has_many :menbers
  has_many :users,through: :menbers
end