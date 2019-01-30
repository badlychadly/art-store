Rails.application.routes.draw do


  resources :products

  post '/login', to: "sessions#create"
  post '/logout', to: "sessions#destroy"
  
  get '/about', to: "admin_info#show"
  put '/about', to: "admin_info#update"
  get '/messages', to: "admin_info#messages"
  post '/messages', to: "admin_info#create_message"

  get '/verify_admin', to: "sessions#verify"


end
