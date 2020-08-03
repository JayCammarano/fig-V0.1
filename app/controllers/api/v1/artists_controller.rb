class Api::V1::ArtistsController < ApiController
  def index    
    render json: Artist.all
  end
  def show
    @artist = Artist.find(params[:id])
    render json: @artist, serializer: ArtistReleasesSerializer
  end
end
