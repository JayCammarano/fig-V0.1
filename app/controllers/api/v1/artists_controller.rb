class Api::V1::ArtistsController < ApiController

  def index    
    render json: Artist.all
  end

  def show
    # // pass in @artist to lastf method call
    @artist = Artist.find(params[:id]) 
    render json: @artist, serializer: ArtistReleasesSerializer
  end

  def create
    
    image = Image.new(attachment: params[:image])
    
    
    new_artist = Artist.new(artist_params)
    if  params[:alias]
      params[:alias].each do |alt_name|
        name_hash = {alt_name: alt_name}
  
        new_alias = Alias.new(name_hash)
        new_artist.aliases << new_alias
      end
    end
    if new_artist.save
      render json: new_artist
    else
      render json: {errors: new_artist.errors.full_messages}
    end
  end

  private

  def artist_params
    params.permit(:name, :description, :image)
  end
end
