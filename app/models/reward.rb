class Reward < ActiveRecord::Base

  has_attached_file :image,
    styles: { normal: "1000x1000>", medium: "350x350>", thumb: "100x100>" },
    path: ":rails_root/public/reward/:id/:style/:filename",
    url: "/reward/:id/:style/:filename"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
