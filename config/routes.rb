Rails.application.routes.draw do
  root 'homes#index'

  get '/artists', to: 'homes#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
