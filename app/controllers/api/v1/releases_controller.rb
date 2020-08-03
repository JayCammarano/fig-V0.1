class Api::V1::ReleasesController < ApiController

  def show
    @artist = Artist.find(params[:artist_id]) 
    @releases = @artist.releases
    render json: @releases 
  end

  def create
    new_artist = Artist.new(artist_params)
    if new_artist.save
      render json: new_artist
    else
      render json: {errors: new_artist.errors.full_messages}
    end
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :description, :alias)
  end
end
