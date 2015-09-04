class User
  include ActiveModel::AttributeMethods
  include ActiveModel::Model
  include ActiveModel::SerializerSupport

  ATTRIBUTES = [
    'address',
    'email',
    'id',
    'name',
    'occupation',
    'year_hunting'
  ]

  attr_accessor *ATTRIBUTES

  # Data Access Class Methods
  def self.all
    raw = UserAdapter.all
    UserDeserializer.parse(raw).collect do |item|
      init(item)
    end
  end

  def self.find_by_id(id)
    raw = UserAdapter.find_by_id(id)
    users = UserDeserializer.parse(raw).collect do |item|
      init(item)
    end

    users.find do |item|
      item.id.to_s == id
    end
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
  end
end
