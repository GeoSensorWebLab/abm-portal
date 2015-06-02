class SightingStatus < ActiveRecord::Base
  validates :sighting_id, uniqueness: true
end
