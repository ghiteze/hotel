class Admins::SpasController < ApplicationController
  before_action :authenticate_admin!
  layout 'admin'

  def index
    @spas = Spa.all
    @web_location = 'Spa & Wellness'
  end

  def show
  end

  def new
    @spa = Spa.new
    @web_location = 'New Spa & Wellness'
  end

  def create
    @spa = Spa.new(spa_params)
    if @spa.save
      redirect_to admins_spas_path
    end
  end

  def edit
    @spa = Spa.find(params[:id])
    @web_location = 'Edit Spa & Wellness'
  end

  def update
    @spa = Spa.find(params[:id])
    if @spa.update(spa_params)
      redirect_to admins_spas_path
    end
  end

  def destroy
    @spa = Spa.find(params[:id])
    @spa.destroy
    redirect_to admins_spas_path
  end

  private
  def spa_params
    params.require(:spa).permit(:name, :slug, :content, :image, :price)
  end

end
