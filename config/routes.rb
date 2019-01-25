Rails.application.routes.draw do


  resources :products

  post '/login', to: "sessions#create"
  post '/logout', to: "sessions#destroy" 
  get '/verify_admin', to: "sessions#verify"


end
