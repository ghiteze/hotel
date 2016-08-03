class Admins::AccommodationsController < ApplicationController
  before_action :authenticate_admin!
  layout 'admin'
  
  def index
    @accommodations = Accommodation.all
    @web_location = 'Accommodation'
  end

  def show
  end

  def new
    AccommodationImage.images.destroy_all
    @accommodation = Accommodation.new
    @accommodation_images = AccommodationImage.new
    @web_location = 'New Accommodation'
  end

  def create
    @accommodation = Accommodation.new(accommodation_params)
    if @accommodation.save
      AccommodationImage.images.update_all(:accommodation_id => @accommodation.id)
      redirect_to admins_accommodations_path
    end
  end

  def edit
    @accommodation = Accommodation.find(params[:id])
    session[:accommodation_id] = params[:id]
    @web_location = 'Edit Accommodation'
  end

  def update
    @accommodation = Accommodation.find(params[:id])
    if @accommodation.update(accommodation_params)
      redirect_to admins_accommodations_path
    end
  end

  def destroy
    @accommodation = Accommodation.find(params[:id])
    @accommodation.accommodation_images.destroy_all
    @accommodation.destroy
    redirect_to admins_accommodations_path
  end

  def create_image
    if params[:images].present?
      params[:images].each do |img|
        AccommodationImage.create(image: img)
        if session[:accommodation_id].present?
          AccommodationImage.images.update_all(:accommodation_id => session[:accommodation_id])
        end
      end
      session[:accommodation_id] = nil
    end
    respond_to do |format|
      format.json { render :json => AccommodationImage.images.to_json}
    end
  end

  def destroy_image
    accommodation_image = AccommodationImage.find(params['id'])
    accommodation_image.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
  def accommodation_params
    params.require(:accommodation).permit(:name, :slug, :kind, :size, :number, :rate, :content)
  end
end
