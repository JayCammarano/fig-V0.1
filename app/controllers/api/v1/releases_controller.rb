<<<<<<< HEAD
class Api::V1::ReleasesController < ApiController

    def show
      @artist = Artist.find(params[:artist_id]) 
      @reviews = @artist.releases.find(params[:id])
      render json: @reviews, serializer: ReleaseArtistsSerializer
  
  private

  def artist_params
    params.require(:artist).permit(:name, :description, :alias)
end
end
