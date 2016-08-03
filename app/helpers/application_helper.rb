module ApplicationHelper
  
  def link_active(path, link, options = {})
    options[:class] ||= controller_name == options[:ctrl] ? "active" : ""

    link_to path, :class => options[:class] do
      "<i class='material-icons left'>#{options[:icon]}</i> #{link}".html_safe
    end
  end

  def tab_active(s)
    html = ""
    step = "step_#{s}"
    html = eval("booking.step_#{s}") ? "active" : ""
    
    q = s + 1
    html = "" if eval("booking.step_#{q}")

    html.html_safe
  end

  def finish_step(s)
    html = ""
    step = "step_#{s}"
    html = eval("booking.step_#{s}") ? "finish-step" : ""
    html.html_safe
  end

  def check_in
    Time.at(booking.check_in).strftime("%d-%m-%Y")
  end

  def check_out
    Time.at(booking.check_out).strftime("%d-%m-%Y")
  end

  def adult
    booking.adult
  end

  def children
    booking.children
  end

  def accommodation_name
    booking.accommodation_name
  end

  def accommodation_price
    booking.accommodation_price
  end

  def customer
    OpenStruct.new(
      :first_name           => booking.first_name,
      :last_name            => booking.last_name,
      :email                => booking.email,
      :phone_number         => booking.phone_number,
      :city                 => booking.city,
      :address              => booking.address,
      :special_requirements => booking.special_requirements
    )
  end

  def accommodation
    html = ''

    accommodation_name.each_with_index do |name, index|
      html += "<span>#{name}</span>"
      html += "<span class='right'>$#{accommodation_price[index]}</span><br/>"
    end

    html.html_safe
  end

  def total_price
    check_in  = booking.check_in
    check_out = booking.check_out
    price     = 0

    accommodation_price.each { |p| price += p }
    (check_out - check_in)/(3600 * 24) * price
  end

  def booking
    OpenStruct.new(session[:booking])
  end

  def tran(booking)
    OpenStruct.new(
      :name        => booking.accommodation.name,
      :slug        => booking.accommodation.slug,
      :price       => booking.accommodation.price,
      :check_in    => Time.at(booking.check_in).strftime("%d-%m-%Y"),
      :check_out   => Time.at(booking.check_out).strftime("%d-%m-%Y"),
      :total_price => (booking.check_out-booking.check_in)/(3600*24)*booking.accommodation.price,
      :vat         => (booking.check_out-booking.check_in)/(3600*24)*booking.accommodation.price/10
    )
  end

  def tran_price(bookings)
    total = 0
    bookings.each { |booking| total += tran(booking).total_price }
    total
  end

  def gym_with_price_package(booking)
    package = booking.package
    if package == 1
      booking.gym.price * 1
    elsif package == 3
      booking.gym.price * 2
    elsif package == 6
      booking.gym.price * 3
    elsif package == 12
      booking.gym.price * 5
    end
  end
end
