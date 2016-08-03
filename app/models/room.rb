class Room < ActiveRecord::Base
  belongs_to :accommodation
  has_many :line_bookings

  def self.count_by_where_condition(to_day)
    where("check_in >= ? OR check_out >= ?", to_day, to_day).count
  end
end
