class WelcomeController < ApplicationController
  def index
    @introduction = Introduction.first
  end
end
