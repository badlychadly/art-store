Rails.application.routes.draw do


  resources :products

  post '/login', to: "sessions#create" 


end
