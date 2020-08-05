class Api::V1::ReleasesController < ApiController

    def show
      @artist = Artist.find(params[:artist_id]) 
      @release = @artist.releases.find(params[:id])
      render json: @release, serializer: ReleaseArtistsSerializer
    end

    def create
      @release = Release.new(release_params)

      if @release.save
        flash[:success] = "Release successfully created"
        redirect_to @release
      else
        flash[:error] = "Something went wrong"
        render 'new'
      end
    end
    
  private

  def release_params
    params.require(:release).permit(:title, :description, :artists, :tags)
  end

end
