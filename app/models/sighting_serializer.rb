class SightingSerializer < ActiveModel::Serializer
  ATTRIBUTES = [
    'created_at',
    'created_by',
    'id',
    'lat',
    'lon',
    'no_of_adults',
    'no_of_calves',
    'unusual_observations',
    'updated_at',
    'vsigns'
  ]

  attributes :created_at, :created_by, :id, :lat, :lon, :no_of_adults,
             :no_of_calves, :unusual_observations, :updated_at, :vsigns, :status
end
