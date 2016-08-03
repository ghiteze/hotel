class LanguageController < ApplicationController

  def set_lang
    if params[:lang].present?
      session[:lang] = (params[:lang] == 'en') ? nil : params[:lang]
    end
    redirect_to :back
  end
end
