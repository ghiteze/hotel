class ContactsController < ApplicationController
  def index
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to contacts_path
    else
      flash[:alert] = @contact.errors.full_messages
      redirect_to contacts_path
    end
  end

  private
  def contact_params
    params.require(:contact).permit(:full_name, :address, :phone_number, :email, :subject, :content)
  end
  
end
