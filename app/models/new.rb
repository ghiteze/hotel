class New < ActiveRecord::Base
  
  has_attached_file :image,
    styles: { normal: "1000x1000>", medium: "350x350>", thumb: "100x100>" },
    path: ":rails_root/public/news/:id/:style/:filename",
    url: "/news/:id/:style/:filename"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
