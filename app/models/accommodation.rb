class Accommodation < ActiveRecord::Base
  has_many :accommodation_images
  has_many :rooms
end
