Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api, defaults:{format: :json} do
    # resources list for our api
    resources :messages, only:[:show]
  end
  # Defines the root path route ("/")
  root "root#index"
end
