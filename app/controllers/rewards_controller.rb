class RewardsController < ApplicationController
  def index
    @rewards = Reward.all
  end

  def show
    @reward = Reward.find_by_slug(params[:slug])
  end
end
