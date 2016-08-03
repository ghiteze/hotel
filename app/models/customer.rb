class Customer < ActiveRecord::Base
  has_many :transaction_histories

  def self.create_customer(ses)
    create(
      :first_name   => ses[:first_name],
      :last_name    => ses[:last_name],
      :email        => ses[:email],
      :phone_number => ses[:phone_number],
      :city         => ses[:city],
      :address      => ses[:address],
      :note         => ses[:special_requirements]
    )
  end
end
