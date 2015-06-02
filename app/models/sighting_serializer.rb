# This class is for parsing the output from the ABM server's JSON format into
# a Ruby hash for this Rails app.
class SightingSerializer
  class << self
    def parse(raw)
      body = JSON.parse(raw)
      sightings = body["sightings"]
    end
  end
end
