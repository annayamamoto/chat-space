class Group < ApplicationRecord
  has_many :group_users
  has_many :users, through: :group_users
<<<<<<< HEAD
  validates :name, presence: true, uniqueness: true
=======
  validates :name, presence: ture, uniqueness: true
>>>>>>> 2b536f94ec4c1dab86783b953537efc9d4237242
end
