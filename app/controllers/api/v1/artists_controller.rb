class Api::V1::ArtistsController < ApiController
  def index    
    render json: Artist.all
  end

  def show
    @artist = Artist.find(params[:id])
    render json: @artist, serializer: ArtistReleasesSerializer
  end

  def create
    artist_names = [artist_params["name"]]
    aliases = artist_params["alias"].split(",")
    aliases.each do |name|
      artist_names << name
    end
    artist_params["alias"] = artist_names
    binding.pry
    
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
