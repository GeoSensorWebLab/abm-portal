class SightingStatus < ActiveRecord::Base
  DEFAULT_VALUES = [
    "Unreviewed",
    "Needs Review",
    "Needs Discussion",
    "Reviewed"
  ]

  validates :sighting_id, uniqueness: true
end
