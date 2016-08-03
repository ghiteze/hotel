class Admins::RewardsController < ApplicationController
  before_action :authenticate_admin!
  before_action :find_by_id, only: [:show, :edit, :update, :destroy]
  layout 'admin'

  def index
    @rewards = Reward.all
    @web_location = 'Reward'
  end

  def show
  end

  def new
    @reward = Reward.new
    @web_location = 'New Reward'
  end

  def create
    @reward = Reward.new(reward_params)
    if @reward.save
      redirect_to admins_rewards_path
    end
  end

  def edit
    @web_location = 'Edit Reward'
  end

  def update
    if @reward.update(reward_params)
      redirect_to admins_rewards_path
    end
  end

  def destroy
    if @reward.destroy
      redirect_to admins_rewards_path
    end
  end

  private
  def reward_params
    params.require(:reward).permit(:title, :content, :image, :summary, :slug)
  end

  def find_by_id
    @reward = Reward.find(params[:id])
  end
end
