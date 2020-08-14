require 'rails_helper'

RSpec.describe Artist, type: :model do
  #describe "releaseImageCaller" do
  #  let!(:release1) {FactoryBot.create(:release)}

  #   context "when an artist has a release" do
  #     it "gets release's image and other info" do
  #       artist1 = release1.artists.first
  #       releases = artist1.releaseImageCaller
        
  #       expect(releases[0][:images]).to eq(artist1.releases.first.images)
  #       expect(releases[0][:id]).to eq(artist1.releases.first.id)
  #       expect(releases[0][:title]).to eq(artist1.releases.first.title)
  #     end
  #   end
  # end

  describe "lastfmCaller" do
    let!(:release1) {FactoryBot.create(:release)}

    context "when an artist has a release" do
      it "gets information from last.fm" do
        artist1 = release1.artists.first
        lastFMInfo = artist1.lastfmCaller

        expect(lastFMInfo[:bio]).not_to be_empty
      end
    end
  end
  
  describe "imageCaller" do
    let!(:artist1){FactoryBot.create(:artist)}

    context "when an artist has an image" do
      it "is can be returned from the images table" do
        imageCaller = artist1.imageCaller
        expect(artist1.images.first).to eq(nil)
      end
    end
  end
  
end
