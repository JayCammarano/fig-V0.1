require 'rails_helper'

RSpec.describe Release, type: :model do    
  let!(:artist1) {FactoryBot.create(:artist)}
  let!(:release_no_image) {{title: "testtitle", artists: ([artist1])}}

  describe "coverCaller" do
    context "when called on a release" do
      it "return nothing if there is no image" do
        returned =release_no_image.coverCaller
        expect(returned).to eq(nil)
      end
    end
  end

  describe "artists_presence" do
    context "if the release is uploaded with out an artist" do
      it "returns 'You must add at least one artist'" do
        
      end
    end
  end


  let!(:release_with_image){FactoryBot.create(:release)}
  describe "coverCaller" do
    context "when called on a release" do
      it "return the first attached image" do
        returned = release_with_image.coverCaller
        expect(returned).to eq(artist1.attachment)
      end
    end
  end

  let!(:release_with_artist) {FactoryBot.create(:release)}
  describe "artistImageCaller" do
    context "when called on a release" do
      it "should return the artist's info and image" do
        returned_hash = release_with_artist.artists.first

        expect(returned_hash.images).to eq(artist1.images.first.attachment)
        expect(returned_hash.id).to eq(artist1.id)
        expect(returned_hash.description).to eq(artist1.description)
        expect(returned_hash.name).to eq(artist1.name)
      end
    end
  end
  
end
