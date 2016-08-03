class Admins::AboutsController < ApplicationController
  before_action :authenticate_admin!
  before_action :get_first_record, only: [:index, :update]
  layout 'admin'

  def index
    @web_location = 'About'
  end

  def create
    @about = About.new(about_params)
    if @about.save
      redirect_to admins_abouts_path
    end
  end

  def update
    if @about.update(about_params)
      redirect_to admins_abouts_path
    end
  end

  private
  def about_params
    params.require(:about).permit(:content)
  end

  def get_first_record
    @about = About.first
  end
end
