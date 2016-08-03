Rails.application.routes.draw do


  mount Ckeditor::Engine => '/ckeditor'
    
  namespace :admins do

    resources :introductions, except: [:destroy, :show, :edit]
    resources :abouts, except: [:destroy, :show, :edit]
    resources :rewards
    resources :accommodations do
      collection do
        post 'create_image'
        match 'destroy_image/:id', :to => 'accommodations#destroy_image', :via => :delete, :as => 'destroy_image'
      end
    end
    resources :restaurants do
      collection do
        post 'create_image'
        match 'destroy_image/:id', :to => 'restaurants#destroy_image', :via => :delete, :as => 'destroy_image'
      end
    end
    resources :spas
    resources :gyms
    resources :galleries
    resources :news, except: [:show]
    resources :transactions
    resources :tickets, only: [:index, :show, :destroy]
    root 'dashboards#index'

  end

  namespace :users do
    root 'dashboard#index'
  end

  devise_for :admins, controllers: { sessions: 'admins/sessions' }

  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations', passwords: 'users/passwords' }

  # admin transaction
  match 'admins/transaction/:token', :to => 'admins/transactions#show', :via => :get, :as => 'admin_transaction'

  # user transaction
  match 'users/transaction/:token', :to => 'users/dashboard#transaction', :via => :get, :as => 'user_transaction'

  # transaction
  match '/transaction/:token', :to => 'transactions#show', :via => :get, :as => 'transaction'

  # about
  match '/about-us.html', :to => 'abouts#index', :via => :get, :as => 'abouts'

  # reward
  match '/rewards.html',       :to => 'rewards#index', :via => :get, :as => 'rewards'
  match '/rewards/:slug.html', :to => 'rewards#show',  :via => :get, :as => 'reward'

  # room
  match '/accommodations.html',       :to => 'accommodations#index', :via => :get, :as => 'accommodations'
  match '/accommodations/:slug.html', :to => 'accommodations#show',  :via => :get, :as => 'accommodation'

  # booking
  match '/booking.html', :to => 'bookings#index', :via => :get, :as => 'bookings'

  match '/booking/check_availability', :to => 'bookings#check_availability', :via => :post
  match '/booking/confirm_room',       :to => 'bookings#confirm_room',       :via => :post
  match '/booking/guest_info',         :to => 'bookings#guest_info',         :via => :post
  match '/booking/confirmation',       :to => 'bookings#confirmation',       :via => :post

  match '/booking/step_1.html', :to => 'bookings#step_1', :via => :get, :as => 'booking_step_1'
  match '/booking/step_2.html', :to => 'bookings#step_2', :via => :get, :as => 'booking_step_2'
  match '/booking/step_3.html', :to => 'bookings#step_3', :via => :get, :as => 'booking_step_3'
  match '/booking/step_4.html', :to => 'bookings#step_4', :via => :get, :as => 'booking_step_4'

  # new
  match '/news.html',       :to => 'news#index', :via => :get, :as => 'news'
  match '/news/:slug.html', :to => 'news#show',  :via => :get, :as => 'new'

  # gallery
  match '/gallery.html', :to => 'galleries#index', :via => :get, :as => 'galleries'

  # service
  match '/services.html',       :to => 'services#index', :via => :get, :as => 'services'
  match '/services/:slug.html', :to => 'services#show',  :via => :get, :as => 'service'

  # contact
  match '/contact-us.html', :to => 'contacts#index',  :via => :get, :as => 'contacts'
  match '/contact-us.html', :to => 'contacts#create', :via => :post

  # restaurant
  match '/restaurants.html',        :to => 'restaurants#index', :via => :get, :as => 'restaurants'
  match '/restaurants/:slug.html',  :to => 'restaurants#show',  :via => :get, :as => 'restaurant'

  # spa & wellness
  match '/spa-and-wellness.html',       :to => 'spas#index',   :via => :get,  :as => 'spas'
  match '/spa-and-wellness/:slug.html', :to => 'spas#show',    :via => :get,  :as => 'spa'
  match '/spa-and-wellness/booking',    :to => 'spas#booking', :via => :post, :as => 'spa_booking'

  # gym & fitness
  match '/gym-and-fitness.html',       :to => 'gyms#index',  :via =>  :get,  :as => 'gyms'
  match '/gym-and-fitness/:slug.html', :to => 'gyms#show',   :via =>  :get,  :as => 'gym'
  match '/gym-and-fitness/booking',    :to => 'gyms#booking', :via => :post, :as => 'gym_booking'

  match '/language', :to => 'language#set_lang',  :via => :post, :as => 'language'

  root 'welcome#index'
end
