class GymBooking < ActiveRecord::Base
  belongs_to :gym
  has_many :line_bookings
end
