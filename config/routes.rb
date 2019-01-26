Rails.application.routes.draw do


  resources :products

  post '/login', to: "sessions#create"
  post '/logout', to: "sessions#destroy"
  
  get '/about', to: "admin_info#show"
  post '/about', to: "admin_info#update"

  get '/verify_admin', to: "sessions#verify"


end
