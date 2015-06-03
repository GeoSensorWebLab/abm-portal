class CommentSerializer < ActiveModel::Serializer
  attributes :content, :sighting_id, :created_at, :updated_at
end
