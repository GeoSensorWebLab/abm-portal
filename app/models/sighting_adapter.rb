# SightingAdapter is responsible for interfacing with the ABM Server.
class SightingAdapter
  class << self
    HOST = ENV['API_URL']
    PATH = '/biomap/sightings'

    def all
      conn = Faraday.new(url: HOST)
      response = conn.get do |req|
        req.url PATH
        req.params['sighting_id'] = '*'
        req.params['user_id'] = '*'
      end
      response.body
    end

    def find_by_sighting_id(sighting_id)
      conn = Faraday.new(url: HOST)
      response = conn.get do |req|
        req.url PATH
        req.params['sighting_id'] = sighting_id
        req.params['user_id'] = '*'
      end
      response.body
    end

    def find_by_user_id(user_id)
      conn = Faraday.new(url: HOST)
      response = conn.get do |req|
        req.url PATH
        req.params['sighting_id'] = '*'
        req.params['user_id'] = user_id
      end
      response.body
    end
  end
end
