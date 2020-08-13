Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  mount_devise_token_auth_for 'Admin', at: 'admin_auth'
  as :admin do
    get '/admin_panel', to: 'homes#index'
  end
  root 'homes#index'

  get '/artists', to: 'homes#index'
  get '/artists/:id', to: 'homes#index'
  get "/artists/:artist_id/releases/:id", to: 'homes#index'
  get '/artists/:id/update', to: 'homes#index'
  get "/login", to: 'homes#index'
  get "/signup", to: "homes#index"
  get "/artists/:artist_id/releases/:id/update", to: 'homes#index'

  resources :artists, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :artists, only: [:index, :create, :new, :show, :update] do
        resources :releases, only: [:show, :create, :new, :update]
      end
    end
  end
end
