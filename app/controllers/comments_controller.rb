class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token, if: :json_request?

  def index
    @comments = klass.all
    respond_to do |format|
      format.json { render json: @comments }
    end
  end

  def show
    @comment = klass.find(params['id'])
    respond_to do |format|
      format.json { render json: @comment }
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.save
    respond_to do |format|
      format.json { render json: @comment }
    end
  end

  private

  def klass
    if params['sighting_id']
      Sighting.find_by_id(params['sighting_id']).comments
    else
      Comment
    end
  end

  def json_request?
    request.format.json?
  end

  def comment_params
    params.require(:comment).permit(:content, :sighting_id)
  end

end
