Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  mount_devise_token_auth_for 'Admin', at: 'admin_auth'
  as :admin do
    # Define routes for Admin within this block.
  end
  root 'homes#index'

  get '/artists', to: 'homes#index'
<<<<<<< HEAD

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
=======
  get '/artists/:id', to: 'homes#index'
  get "/artists/:artist_id/releases/:id", to: 'homes#index'


  resources :artists, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :artists, only: [:index, :create, :new, :show] do
        resources :releases, only: [:show, :create, :new]
      end
    end
  end
>>>>>>> 4f102d698048680483f9b4995c4bf62e3b2813d6
end
