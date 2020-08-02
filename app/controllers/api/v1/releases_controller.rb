class Api::V1::ReleasesController < ApplicationController
  def index    
    render json: Release.find(params[:id])
  end
  def show
    @artist = Artist.find(params[:id]) 

    render json: @artist
  end
end
