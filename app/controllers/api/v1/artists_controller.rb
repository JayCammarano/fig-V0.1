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
    new_artist = Artist.new(artist_params)
    image = Image.create(attachment: params[:image])
    new_artist.images << image
    
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

  def update
    @artist = Artist.find(params[:id])
      if @artist.update_attributes(artist_params)
        
        render json: @artist, serializer: ArtistReleasesSerializer
        
      else
        render json: @artist, serializer: ArtistReleasesSerializer
      end
  end
  
  private

  def artist_params
    params.permit(:name, :description)
  end
end
