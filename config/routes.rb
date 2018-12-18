Rails.application.routes.draw do


  resources :products

  post '/login', to: "sessions#create" 
  get '/verify_admin', to: "sessions#verify"


end
