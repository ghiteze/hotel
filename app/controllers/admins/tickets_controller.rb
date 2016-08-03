class Admins::TicketsController < ApplicationController
  before_action :authenticate_admin!
  layout 'admin'

  def index
    @tickets = Contact.all
    @web_location = 'Tickets'
  end

  def show
    @ticket = Contact.find(params['id'])
    @web_location = 'Ticket > ' + @ticket.subject
  end

  def destroy
    @ticket = Contact.find(params['id'])
    @ticket.destroy
    redirect_to admins_tickets_path
  end
end
