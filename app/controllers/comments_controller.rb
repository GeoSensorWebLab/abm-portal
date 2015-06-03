class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token, if: :json_request?

  def index
    @comments = Comment.all
    respond_to do |format|
      format.json { render json: @comments, root: true }
    end
  end

  def show
    @comment = Comment.find(params['id'])
    respond_to do |format|
      format.json { render json: @comment, root: true }
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.save
    respond_to do |format|
      format.json { render json: @comment, root: true }
    end
  end

  private

  def json_request?
    request.format.json?
  end

  def comment_params
    params.require(:comment).permit(:content, :sighting_id)
  end

end
