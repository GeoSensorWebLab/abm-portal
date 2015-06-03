class CommentSerializer < ActiveModel::Serializer
  attributes :content, :id, :sighting_id, :created_at, :updated_at
end
