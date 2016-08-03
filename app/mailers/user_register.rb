class UserRegister < ApplicationMailer
  default :from => 'ghiteghite@gmail.com'

  def send_user_email(user)
    @user = user
    mail( :to => @user.email,
    :subject => 'Username and password' )
  end
end