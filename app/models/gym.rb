class Gym < ActiveRecord::Base
  
  has_attached_file :image,
    styles: { normal: "1000x1000>", medium: "350x350>" },
    path: ":rails_root/public/gym/:id/:style/:filename",
    url: "/gym/:id/:style/:filename"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :gym_bookings
end
