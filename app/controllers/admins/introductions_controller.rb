class Admins::IntroductionsController < ApplicationController
  before_action :authenticate_admin!
  before_action :get_first_record, only: [:index, :update]
  layout 'admin'

  def index
    @web_location = 'Introduction'
  end

  def create
    @introduction = Introduction.new(introduction_params)
    if @introduction.save
      redirect_to admins_introductions_path
    end
  end

  def update
    if @introduction.update(introduction_params)
      redirect_to admins_introductions_path
    end
  end

  private
  def introduction_params
    params.require(:introduction).permit(:content)
  end

  def get_first_record
    @introduction = Introduction.first
  end
end
