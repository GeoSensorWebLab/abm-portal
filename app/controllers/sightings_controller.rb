class SightingsController < ApplicationController
  def index
    @sightings = Sighting.all
  end
end
