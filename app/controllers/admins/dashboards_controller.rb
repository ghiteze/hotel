class Admins::DashboardsController < ApplicationController
  before_action :authenticate_admin!
  layout 'admin'
  
  def index
    @web_location = 'Dashboard'
  end

end
