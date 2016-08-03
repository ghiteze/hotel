class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
  end

  def show
    @restaurant= Restaurant.find_by_slug(params[:slug])
  end
end
