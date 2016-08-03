class RestaurantImage < ActiveRecord::Base

  has_attached_file :image,
    styles: { normal: "1000x1000>", medium: "350x350>" },
    path: ":rails_root/public/restaurant/:id/:style/:filename",
    url: "/restaurant/:id/:style/:filename"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :restaurant
  
  def self.images
    where("restaurant_id is NULL")
  end

end
