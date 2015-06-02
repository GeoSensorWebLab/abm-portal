class SightingsController < ApplicationController
  def index
    @sightings = Sighting.all
  end

  def show
    @sightings = Sighting.all
    render 'index'
  end
end
