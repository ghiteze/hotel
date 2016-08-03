class Admins::RestaurantsController < ApplicationController
  before_action :authenticate_admin!
  layout 'admin'

  def index
    @restaurants = Restaurant.all
    @web_location = 'Restaurant'
  end

  def show
  end

  def new
    RestaurantImage.images.destroy_all
    @restaurant = Restaurant.new
    @restaurant_images = RestaurantImage.new
    @web_location = 'New Restaurant'
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      RestaurantImage.images.update_all(:restaurant_id => @restaurant.id)
      redirect_to admins_restaurants_path
    end
  end

  def edit
    @restaurant = Restaurant.find(params[:id])
    session[:restaurant_id] = params[:id]
    @web_location = 'Edit Restaurant'
  end

  def update
    @restaurant = Restaurant.find(params[:id])
    if @restaurant.update(restaurant_params)
      redirect_to admins_restaurants_path
    end
  end

  def destroy
    @restaurant = Restaurant.find(params[:id])
    @restaurant.restaurant_images.destroy_all
    @restaurant.destroy
    redirect_to admins_restaurants_path
  end

  def create_image
    if params[:images].present?
      params[:images].each do |img|
        RestaurantImage.create(image: img)
        if session[:restaurant_id].present?
          RestaurantImage.images.update_all(:restaurant_id => session[:restaurant_id])
        end
      end
      session[:restaurant_id] = nil
    end
    respond_to do |format|
      format.json { render :json => RestaurantImage.images.to_json}
    end
  end

  def destroy_image
    restaurant_image = RestaurantImage.find(params['id'])
    restaurant_image.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(:name, :slug, :content)
  end



end
