Rails.application.routes.draw do
  root to: redirect('/sightings')

  resources :comments
  resources :sightings do
    resources :comments
  end
  resources :sighting_statuses
  resources :users

  mount_ember_app :frontend, to: '/'
end
