class Admins::TransactionsController < ApplicationController
  before_action :authenticate_admin!
  layout 'admin'

  def index
    @web_location = 'Transaction'
    @html = ''

    if params['filter_by'].present?
      filter_by = params['filter_by']

      date_from = filter_by['date_from'] == '' ? Time.parse('1-1-2015') : Time.parse(filter_by['date_from'])
      date_to = filter_by['date_to'] == '' ? Time.parse('1-1-2020').end_of_day : Time.parse(filter_by['date_to']).end_of_day
      total_price = filter_by['price'] == '' ? 0 : filter_by['price']

      @transaction_histories = TransactionHistory.order('id DESC').where(
        'created_at >= ? AND created_at <= ? AND total_price >= ?',
        date_from, date_to, total_price
      )
    else
      @transaction_histories = TransactionHistory.order('id DESC').all
    end

    @transaction_histories.each_with_index do |transaction, index|
      @html += '<tr>'
        @html += "<td>#{index+1}</td>"
        @html += "<td><a href='admins/transaction/#{transaction.token}'>#{transaction.token}</a></td>"
        @html += "<td>$#{transaction.total_price}</td>"
        @html += "<td>#{transaction.created_at.strftime("%d-%m-%Y %H:%M:%S")}</td>"
        @html += "<td><a href='admins/transactions/#{transaction.id}' data-confirm='Are you sure?' data-method='delete'>Delete</a></td>"
      @html += '</tr>'
    end

    respond_to do |format|
      format.html
      format.text { render :text => @html }
    end
  end

  def show
    token = params['token']
    @web_location = "Transaction > #{token}"
    
    transaction_history = transaction_history(token)
    @bookings           = transaction_history.bookings
    @user_info          = transaction_history.user_info
    @line_bookable_type = transaction_history.line_bookable_type
  end

  def destroy
    @transaction = TransactionHistory.find(params[:id])
    @transaction.destroy
    redirect_to admins_transactions_path
  end
end
