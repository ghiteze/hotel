class GymsController < ApplicationController
  def index
    @gyms = Gym.all
  end

  def show
    @gym= Gym.find_by_slug(params[:slug])
  end

  def booking
    token = session[:token] = random_hash
    gym_booking = params['gym_booking']
    customer_info = {
      :first_name   => gym_booking['first_name'],
      :last_name    => gym_booking['last_name'],
      :email        => gym_booking['email'],
      :phone_number => gym_booking['phone_number'],
      :city         => gym_booking['city'],
      :address      => gym_booking['address'],
      :note         => ''
    }
    customer = Customer.create_customer(customer_info)
    gym = Gym.find_by_name(gym_booking['name'])
    gym_package = gym_booking['package'].to_i
    total_price = 0

    if gym_package == 1
      total_price = gym.price * 1
    elsif gym_package == 3
      total_price = gym.price * 2
    elsif gym_package == 6
      total_price = gym.price * 3
    elsif gym_package == 12
      total_price = gym.price * 5
    end

    total_price = total_price + ((total_price*10)/100)

    if current_user.present?
      transaction = customer.transaction_histories.create(
        :token => token,
        :user_id => current_user.id,
        :total_price => total_price
      )
    else
      transaction = customer.transaction_histories.create(
        :token => token,
        :total_price => total_price
      )
    end

    gym_booking = gym.gym_bookings.create( :package => gym_booking['package'] )

    line_booking = transaction.line_bookings.create(
      :line_bookable_id   => gym_booking.id,
      :line_bookable_type => 'GymBooking',
    )

    flash[:notice] = "Tks you bla bla"
    redirect_to transaction_path(token)
  end
end
