class Admins::GalleriesController < ApplicationController
  before_action :authenticate_admin!
  layout 'admin'

  def index
    @web_location = 'Galleries'
    @galleries = Gallery.all
    @gallery = Gallery.new
  end

  def create
    if params[:images].present?
      params[:images].each do |img|
        Gallery.create(image: img)
      end
    end
    respond_to do |format|
      format.json { render :json => Gallery.all.to_json}
    end
  end

  def update
  end

  def destroy
    @gallery = Gallery.find(params[:id])
    @gallery.destroy
    redirect_to admins_galleries_path
  end
end
