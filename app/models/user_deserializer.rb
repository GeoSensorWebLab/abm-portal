# This class is for parsing the output from the ABM server's JSON format into
# a Ruby hash for this Rails app.
class UserDeserializer
  class << self
    def parse(raw)
      body = JSON.parse(raw)
      users = body["users"]
    end
  end
end
