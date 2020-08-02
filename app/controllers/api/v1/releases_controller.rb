class Api::V1::ReleasesController < ApplicationController

  def show
    debugger
    @artist = Artist.find(params[:id]) 

    render json: @artist
  end
end
