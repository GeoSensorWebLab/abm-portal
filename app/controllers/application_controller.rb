class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :vary_by_accept

  http_basic_authenticate_with name: ENV["BASIC_USER"], password: ENV["BASIC_PASS"]

  private

  # This adds a Vary for responses. This is useful when returning a URL that
  # has multiple representations depending on the Accepts header sent by the
  # client.
  def vary_by_accept
    response.headers['Vary'] = 'Accept'
  end
end
