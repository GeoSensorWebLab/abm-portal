class SightingStatusesController < ApplicationController
  skip_before_action :verify_authenticity_token, if: :json_request?

  def index
    @sighting_statuses = SightingStatus.all
    respond_to do |format|
      format.json { render json: @sighting_statuses, root: true }
    end
  end

  def show
    @sighting_status = SightingStatus.find(params['id'])
    respond_to do |format|
      format.json { render json: @sighting_status, root: true }
    end
  end

  def update
    @sighting_status = SightingStatus.find(params['id'])
    @sighting_status.update(status_params)

    respond_to do |format|
      format.json { render json: @sighting_status, root: true }
    end
  end

  private

  def json_request?
    request.format.json?
  end

  def status_params
    params.require(:sighting_status).permit(:state)
  end

end
