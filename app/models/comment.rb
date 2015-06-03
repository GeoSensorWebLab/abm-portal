class Comment < ActiveRecord::Base
  validates :sighting_id, presence: true
end
