class Sighting
  include ActiveModel::AttributeMethods
  include ActiveModel::Model

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

  attr_accessor *ATTRIBUTES
  attr_accessor :status

  # Data Access Class Methods
  def self.all
    raw = SightingAdapter.all
    SightingSerializer.parse(raw).collect do |item|
      init(item)
    end
  end

  def self.find_by_id(id)
    raw = SightingAdapter.find_by_sighting_id(id)
    init(SightingSerializer.parse(raw))
  end

  def self.find_by_user_id(id)
    raw = SightingAdapter.find_by_user_id(id)
    init(SightingSerializer.parse(raw))
  end

  # Initialize a new object from a hash and only add the attributes known in
  # this version.
  def self.init(item)
    inst = new(item["id"])
    ATTRIBUTES.each do |attr|
      inst.send(attr + "=", item[attr])
    end
    inst
  end

  def initialize(id)
    self.id = id
    self.status = SightingStatus.find_or_create_by(sighting_id: id)
  end
end
