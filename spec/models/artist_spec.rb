require 'rails_helper'

RSpec.describe Artist, type: :model do
  describe "releaseImageCaller" do
    let!(:release1) {FactoryBot.create(:release)}

    context "when an artist has a release" do
      it "gets related releases" do
        artist1 = release1.artists.first
        releases = artist1.releaseImageCaller
      
        expect(releases[0][:id]).to eq(artist1.releases.first.id)
        expect(releases[0][:title]).to eq(artist1.releases.first.title)
      end
    end
  end
  describe "lastfmCaller" do
    let!(:release1) {FactoryBot.create(:release)}

    context "when an artist has a release" do
      it "gets related releases" do
        artist1 = release1.artists.first
        lastFMInfo = artist1.lastfmCaller

        expect(lastFMInfo[:bio]).not_to be_empty
      end
    end
  end
end
