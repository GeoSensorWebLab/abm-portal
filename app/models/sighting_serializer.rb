class SightingSerializer < ActiveModel::Serializer
  attributes :created_at, :created_by, :id, :lat, :lon, :no_of_adults,
             :no_of_calves, :unusual_observations, :updated_at, :vsigns, :status

  private

  def attributes
    hash = super
    hash.merge!(links: {
      comments: sighting_comments_path(self.id)
    })
    hash
  end


end
