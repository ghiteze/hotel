class SpaBooking < ActiveRecord::Base
  belongs_to :spa
  has_many :line_bookings
end
