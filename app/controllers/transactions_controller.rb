class TransactionsController < ApplicationController
  def show
    token   = params['token']
    s_token = session[:token]
    
    if token == s_token
      transaction_history = transaction_history(token)
      @bookings           = transaction_history.bookings
      @user_info          = transaction_history.user_info
      @line_bookable_type = transaction_history.line_bookable_type
    else
      flash[:alert] = 'Permission denied'
      redirect_to root_path
    end
  end

end
