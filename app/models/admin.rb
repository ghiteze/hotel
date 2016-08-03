class Admin < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :admins_roles
  has_many :roles, through: :admins_roles

  devise :database_authenticatable,
         :recoverable, :rememberable, :trackable, :validatable

  def role?(role)
    !!self.roles.find_by_name(role.to_s.camelize)
  end
end
