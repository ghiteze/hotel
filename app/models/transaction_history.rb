class TransactionHistory < ActiveRecord::Base
  belongs_to :customer
  belongs_to :user
  has_many :line_bookings

  def self.create_transaction(token)
    create( :token => token )
  end

  def random_hash
    o = [('a'..'z'), ('A'..'Z')].map { |i| i.to_a }.flatten
    (0...32).map { o[rand(o.length)] }.join
  end
end
