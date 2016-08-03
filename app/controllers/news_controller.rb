class NewsController < ApplicationController
  def index
    @news = New.all
  end

  def show
    @new = New.find_by_slug(params[:slug])
  end
end
