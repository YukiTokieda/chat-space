class User < ApplicationRecord
  has_many :menbers
  has_many :groups,through: :menbers
end
