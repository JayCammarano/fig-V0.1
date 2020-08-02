Rails.application.routes.draw do
  root 'homes#index'

  get '/artists', to: 'homes#index'


  resources :artists, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :artists, only: [:index, :create, :new, :show, :search] do
        resources :releases, only: [:index, :show]
      end
    end
  end
end
