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
    let!(:artist1) {FactoryBot.create(:artist)}
    context "when a request with the correct params is made" do
      it "adds a new artist to the database" do
        previous_count = Artist.count
        
        post :create, :params =>  {:name => artist1.name }
        
        new_count = Artist.count

        expect(response.status).to eq 200
        expect(response.content_type).to eq "application/json"

        expect(new_count).to eq(previous_count + 1)
      end

      it "returns the newly added artist as a json object" do
        post :create, :params =>  {:name => artist1.name }
      end
    end
  end

  describe "GET#Show" do
    let!(:artist1) {FactoryBot.create(:artist)}
    let!(:release1) {FactoryBot.create(:release)}

    context "when a request with the correct params is made" do
      it "returns a status of 200" do
        
        get :show, params: { id: artist1.id }
        expect(response.status).to eq 200
        expect(response.content_type).to eq "application/json"
      end
    end

    it "returns all the releases from a particular artist" do
      get :show, params: { id: artist1.id }
      
      returned_json = JSON.parse(response.body)
    
      expect(returned_json["id"]).to eq(artist1.id)
      expect(returned_json["name"]).to eq(artist1.name)
      expect(returned_json["description"]).to eq(artist1.description)
    end
  end
end
