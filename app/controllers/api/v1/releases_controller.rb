class Api::V1::ReleasesController < ApplicationController

  def show
    @artist = Artist.find(params[:artist_id]) 
    @reviews = @artist.releases.find(params[:id])
    render json: @reviews, serializer: ReleaseArtistsSerializer
  end
end
