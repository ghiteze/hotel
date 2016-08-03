class Admins::GymsController < ApplicationController
  before_action :authenticate_admin!
  layout 'admin'

  def index
    @gyms = Gym.all
    @web_location = 'Gym & Fitness'
  end

  def show
  end

  def new
    @gym = Gym.new
    @web_location = 'New Gym & Fitness'
  end

  def create
    @gym = Gym.new(gym_params)
    if @gym.save
      redirect_to admins_gyms_path
    end
  end

  def edit
    @gym = Gym.find(params[:id])
    @web_location = 'Edit Gym & Fitness'
  end

  def update
    @gym = Gym.find(params[:id])
    if @gym.update(gym_params)
      redirect_to admins_gyms_path
    end
  end

  def destroy
    @gym = Gym.find(params[:id])
    @gym.destroy
    redirect_to admins_gyms_path
  end

  private
  def gym_params
    params.require(:gym).permit(:name, :slug, :content, :image, :price)
  end

end
