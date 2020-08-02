Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  mount_devise_token_auth_for 'Admin', at: 'admin_auth'
  as :admin do
    # Define routes for Admin within this block.
  end
  root 'homes#index'

  get '/artists', to: 'homes#index'
  get '/artists/:id', to: 'homes#index'
  get "/artists/:artist_id/releases/:id", to: 'homes#index'


  resources :artists, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :artists, only: [:index, :create, :new, :show, :search] do
        resources :releases, only: [:index, :show]
      end
    end
  end
end
