class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :user_register
  before_action :set_locale
  # before_action :configure_devise_permitted_parameters, if: :devise_controller?
  before_action :news
  
  def after_sign_in_path_for(resource)
    case resource
    when Admin
      admins_root_path
    when User
      users_root_path
    end
  end

  protected
  def configure_devise_permitted_parameters
    registration_params = [:first_name, :last_name, :phone_number, :city, :address, :email, :password, :password_confirmation]
    devise_parameter_sanitizer.for(:account_update) { 
      |u| u.permit(registration_params << :current_password)
    }
  end
  
  def random_hash
    #o = [('a'..'z'), ('A'..'Z')].map { |i| i.to_a }.flatten
    #(0...32).map { o[rand(o.length)] }.join
    Time.zone.now.strftime("%Y%m%d%H%M%S")
  end

  def transaction_history(token)
    bookings      = []
    line_bookable_type = true
    transaction   = TransactionHistory.find_by_token(token)
    user_info     = transaction.customer
    line_bookings = transaction.line_bookings

    line_bookings.each do |line_booking|
      line_bookable_type = line_booking.line_bookable_type
      obj = eval(line_booking.line_bookable_type)
      bookings << obj.find(line_booking.line_bookable_id)
    end

    OpenStruct.new(
      :user_info          => user_info,
      :line_bookable_type => line_bookable_type,
      :bookings           => bookings
    )
  end

  def news
    @news = New.first(3)
  end
  
  private
  def user_register
    @user = User.new if current_user.nil?
  end

  def set_locale
    I18n.locale = session[:lang] || I18n.default_locale
  end



end
