class LineBooking < ActiveRecord::Base
  belongs_to :transaction_history
  belongs_to :rooms
end
