class Api::V1::ReleasesController < ApiController

    def show
      @artist = Artist.find(params[:artist_id]) 
      @release = @artist.releases.find(params[:id])
      render json: @release, serializer: ReleaseArtistsSerializer
    end

    def create

      @release = Release.new(release_params)

      image = Image.new(params[:image])
      @release.images << image
      params[:artists].each do |artist|
        if artist === ""
        else
          name_hash = {name: artist}
          new_artist = Artist.find_or_initialize_by(name_hash)
          @release.artists << new_artist
        end
      end
  
      if @release.save      
        @release.artists.each do |artist|
          artist.save 
        end
        render json: @release 
      else
      render json: {errors: @release.errors.full_messages}
      end
    end
    
    def update
      @release = Release.find(params[:id])
        if @release.update_attributes(release_params)
          render json: @release
        else
          console.log("something went wrong")\
        end
    end
    
  private

  def release_params
    params.permit(:title, :description, :original_release_year, :release_type, :embed_url)
  end
  def image_params
    params.require(:image).permit(:image)
  end
end
