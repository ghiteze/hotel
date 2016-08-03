class AccommodationImage < ActiveRecord::Base

  has_attached_file :image,
    styles: { normal: "1000x1000>", medium: "350x350>"},
    path: ":rails_root/public/accommodation/:id/:style/:filename",
    url: "/accommodation/:id/:style/:filename"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :accommodation

  def self.images
    where("accommodation_id is NULL")
  end
  
end
