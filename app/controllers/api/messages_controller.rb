class Api::MessagesController < ApplicationController
  # GET /messages
  def show
    render json: Greeting.find(params[:id])
  end
end
