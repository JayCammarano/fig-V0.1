class User < ApplicationRecord
        extend Devise::Models
            # Include default devise modules.
            devise :database_authenticatable, :registerable,
                    :recoverable, :rememberable, :trackable, :validatable,
                    :omniauthable
            include DeviseTokenAuth::Concerns::User
end
