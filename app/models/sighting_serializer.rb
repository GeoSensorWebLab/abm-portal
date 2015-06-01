class SightingSerializer
  class << self
    # Parse the output from the ABM server into Ruby hashes
    def parse(raw)
      body = JSON.parse(raw)
      sightings = body["sightings"]
    end
  end
end
