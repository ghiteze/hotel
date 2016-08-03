class Gallery < ActiveRecord::Base

  has_attached_file :image,
    styles: { thumb: "300x300>" },
    path: ":rails_root/public/galleries/:id/:style/:filename",
    url: "/galleries/:id/:style/:filename"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
