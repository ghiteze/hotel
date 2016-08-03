module DeviseHelper
  def devise_error_messages!
    "<div class='message'><span class='alert'>Current password can't be blank</span></div>".html_safe unless action_name == 'new'
  end
end