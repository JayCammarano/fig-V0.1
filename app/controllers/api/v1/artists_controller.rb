class Api::V1::ArtistsController < ApplicationController
  def index    
    render json: Artist.all
  end
  def show
    @artist = Artist.find(params[:id]) 

    render json: @artist
  end
end
