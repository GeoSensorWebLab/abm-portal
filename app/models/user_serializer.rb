class UserSerializer < ActiveModel::Serializer
  attributes :address, :email, :id, :name, :occupation, :year_hunting
end
