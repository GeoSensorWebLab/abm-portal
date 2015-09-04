# UserAdapter is responsible for interfacing with the ABM Server.
class UserAdapter
  class << self
    HOST = ENV['API_URL']
    PATH = '/biomap/users'

    def all
      conn = Faraday.new(url: HOST)
      response = conn.get do |req|
        req.url PATH
        req.params['email'] = '*'
      end
      response.body
    end

    def find_by_email(email)
      conn = Faraday.new(url: HOST)
      response = conn.get do |req|
        req.url PATH
        req.params['email'] = email
      end
      response.body
    end
  end
end
