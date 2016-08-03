class BookingsController < ApplicationController
  def index
    @accommodations = Accommodation.all
  end

  def check_availability
    session[:booking] = {}
    ses    = session[:booking]
    alert  = []
    state  = true
    to_day = Date.today.to_time.beginning_of_day.to_i

    # 1. booking validate
    if params['booking'].present?
      booking = params['booking']

      if booking['check-in'] == ""
        alert << t('booking.alert.check_in')
        state = false
      else
        check_in = Time.parse(booking['check-in']).to_i
        if check_in < to_day
          alert << "Chon ngay nho hon hom nay"
          state = false
        end
      end
       
      if booking['check-out'] == ""
        alert << t('booking.alert.check_out')
        state = false
      else
        check_out = Time.parse(booking['check-out']).to_i
        if check_out < to_day
          alert << "Chon ngay nho hon hom nay"
          state = false
        elsif check_out <= check_in
          alert << "Check out nho hon hoac = check in"
          state = false
        end
      end

      if booking['adult'] == ""
        alert << t('booking.alert.adult')
        state = false
      else
        adult = booking['adult']
      end

      if booking['children'] == ""
        alert << t('booking.alert.children')
        state = false
      else
        children = booking['children']
      end
    end
    # 1

    # 2. check availability
    if state
      count  = 0
      total_room = 100
      
      count = Room.count_by_where_condition(to_day)

      if count < total_room
        ses[:check_in]  = check_in
        ses[:check_out] = check_out
        ses[:adult]     = adult
        ses[:children]  = children
        ses[:step_2]    = true
        redirect_to bookings_path
      else
        redirect_to :back
        flash[:alert] = 'het phong'
      end
    else
      redirect_to :back
      flash[:alert] = alert
    end
    # 2
  end

  def confirm_room
    alert  = []
    state  = true
    slugs  = params['accommodation']['slug']
    to_day = Date.today.to_time.beginning_of_day.to_i
    ses    = session[:booking]
    ses[:accommodation_name]  = []
    ses[:accommodation_price] = []

    slugs.each do |slug|
      accommodation = Accommodation.find_by_slug(slug)
      count  = accommodation.rooms.count_by_where_condition(to_day)
      number = accommodation.number
      if count >= number
        state = false
        alert << "#{accommodation.name} da het phong loai nay"
      else
        ses[:accommodation_name]  << accommodation.name
        ses[:accommodation_price] << accommodation.price
      end
    end

    if state
      ses[:step_3] = true
      redirect_to bookings_path
    else
      redirect_to :back
      flash[:alert] = alert
    end
  end

  def guest_info
    ses     = session[:booking]
    booking = params['booking']

    ses[:first_name]           = booking['first_name']
    ses[:last_name]            = booking['last_name']
    ses[:email]                = booking['email']
    ses[:phone_number]         = booking['phone_number']
    ses[:city]                 = booking['city']
    ses[:address]              = booking['address']
    ses[:special_requirements] = booking['special_requirements']
    ses[:step_4]               = true

    redirect_to bookings_path
  end

  def confirmation
    ses = OpenStruct.new(session[:booking])
    token = session[:token] = random_hash

    customer = Customer.create_customer(ses)
    total_price = 0

    ses.accommodation_name.each do |name|
      accommodation = Accommodation.find_by_name(name)
      total_price += accommodation.price * ((ses.check_out - ses.check_in)/(3600*24))
    end
    total_price += (total_price*10)/100

    if current_user.present?
      transaction = customer.transaction_histories.create(
        :token   => token,
        :user_id => current_user.id,
        :total_price => total_price
      )
    else
      transaction = customer.transaction_histories.create(
        :token   => token,
        :total_price => total_price
      )
    end

    ses.accommodation_name.each do |name|
      accommodation = Accommodation.find_by_name(name)

      room = accommodation.rooms.create(
        :check_in  => ses.check_in,
        :check_out => ses.check_out
      )

      line_booking = transaction.line_bookings.create(
        :line_bookable_id   => room.id,
        :line_bookable_type => 'Room',
      )
    end

    session[:booking] = nil
    flash[:notice] = "Tks you bla bla"
    redirect_to transaction_path(token)
  end
end
