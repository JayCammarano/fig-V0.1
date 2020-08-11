require 'rails_helper'

RSpec.describe Api::V1::ArtistsController, type: :controller do
  describe "GET#Index" do
    let!(:artist1) {FactoryBot.create(:artist)}
    let!(:artist2) {FactoryBot.create(:artist)}

    it "returns a status of 200" do
      get :index

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "returns all the products in the database" do
      get :index

      returned_json = JSON.parse(response.body)
        
      expect(returned_json[0]["id"]).to eq(artist1.id)
      expect(returned_json[0]["name"]).to eq(artist1.name)
      expect(returned_json[0]["description"]).to eq(artist1.description)
    end
  end
  describe "POST#Create" do
    let!(:artist1) { {"name"=>"test", "description"=>"yeah", "alias"=>["", "test1", "test2"],} }
    let!(:bad_artist) { {artist: {description: "itshouldntwork"}} }

    context "when a request with the correct params is made" do
      it "adds a new artist to the database" do
        previous_count = Artist.count
        binding.pry
        
        post :create, params: artist1
        new_count = Artist.count

        expect(response.status).to eq 200
        expect(response.content_type).to eq "application/json"

        expect(new_count).to eq(previous_count + 1)
      end

      it "returns the newley added artist as a json object" do
        post :create, params: artist1

      end
    end
  end
end
