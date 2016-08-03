class Spa < ActiveRecord::Base

  has_attached_file :image,
    styles: { normal: "1000x1000>", medium: "350x350>" },
    path: ":rails_root/public/spa/:id/:style/:filename",
    url: "/spa/:id/:style/:filename"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :spa_bookings
end
