class SpasController < ApplicationController
  def index
    @spas = Spa.all
  end

  def show
    @spa= Spa.find_by_slug(params[:slug])
  end

  def booking
    token = session[:token] = random_hash
    spa_booking = params['spa_booking']
    customer_info = {
      :first_name   => spa_booking['first_name'],
      :last_name    => spa_booking['last_name'],
      :email        => spa_booking['email'],
      :phone_number => spa_booking['phone_number'],
      :city         => spa_booking['city'],
      :address      => spa_booking['address'],
      :note         => ''
    }
    customer = Customer.create_customer(customer_info)
    spa = Spa.find_by_name(spa_booking['name'])

    if current_user.present?
      transaction = customer.transaction_histories.create(
        :token   => token,
        :user_id => current_user.id,
        :total_price => (spa.price * spa_booking['package'].to_i) + ((spa.price * spa_booking['package'].to_i * 10)/100)
      )
    else
      transaction = customer.transaction_histories.create(
        :token => token,
        :total_price => (spa.price * spa_booking['package'].to_i) + ((spa.price * spa_booking['package'].to_i * 10)/100)
      )
    end

    spa_booking = spa.spa_bookings.create( :package => spa_booking['package'] )

    line_booking = transaction.line_bookings.create(
      :line_bookable_id   => spa_booking.id,
      :line_bookable_type => 'SpaBooking',
    )

    flash[:notice] = "Tks you bla bla"
    redirect_to transaction_path(token)
  end
end
