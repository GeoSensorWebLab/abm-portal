Rails.application.routes.draw do
  resources :comments
  resources :sightings do
    resources :comments
  end
  resources :sighting_statuses
  resources :users

  mount_ember_app :frontend, to: "/"

  root to: redirect('/sightings')
end
