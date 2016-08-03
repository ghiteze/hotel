class Admins::NewsController < ApplicationController
  before_action :authenticate_admin!
  layout 'admin'
  
  def index
    @news = New.all
    @web_location = 'News'
  end

  def show
  end

  def new
    @new = New.new
    @web_location = 'New News'
  end

  def create
    @new = New.new(new_params)
    if @new.save
      redirect_to admins_news_index_path
    end
  end

  def edit
    @new = New.find(params[:id])
    @web_location = 'Edit News'
  end

  def update
    @new = New.find(params[:id])
    if @new.update(new_params)
      redirect_to admins_news_index_path
    end
  end

  def destroy
  end

  private
  def new_params
    params.require(:new).permit(:name, :slug, :summary, :content, :image)
  end
end
