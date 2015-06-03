class SightingsController < ApplicationController
  def index
    @sightings = Sighting.all
    respond_to do |format|
      format.html
      format.json { render json: @sightings }
    end
  end

  def show
    @sighting = Sighting.find_by_id(params['id'])
    respond_to do |format|
      format.html { render 'index' }
      format.json { render json: @sighting }
    end
  end
end
