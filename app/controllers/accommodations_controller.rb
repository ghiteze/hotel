class AccommodationsController < ApplicationController
  def index
    @accommodations = Accommodation.all
  end

  def show
    @accommodation = Accommodation.find_by_slug(params[:slug])
  end
end
