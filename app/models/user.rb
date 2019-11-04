class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
<<<<<<< HEAD
=======
        
>>>>>>> 2b536f94ec4c1dab86783b953537efc9d4237242
  has_many :messages
  has_many :group_users
  has_many :groups, through: :group_users
end
