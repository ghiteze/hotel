class Users::DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    @user = current_user
    @transaction_histories = @user.transaction_histories
  end

  def transaction
    token               = params['token']
    transaction_history = transaction_history(token)
    @bookings           = transaction_history.bookings
    @line_bookable_type = transaction_history.line_bookable_type
  end
end
