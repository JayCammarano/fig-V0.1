class Artist < ApplicationRecord
  validates :name, presence: true
  has_and_belongs_to_many :releases 
  has_and_belongs_to_many :aliases
  has_many :labels, through: :releases
  has_many :tags, through: :releases
  
  def lastfmCaller()
    name = self.name
    lastfmKey=ENV["LASTFM_API_KEY"]
    url= HTTParty.get("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=#{name}&api_key=#{lastfmKey}&format=json", format: :plain)
    parsed = JSON.parse url, symbolize_names: true
    lastfmHash= { } 

    lastfmHash[:similar] = parsed[:artist][:similar]
    lastfmHash[:bio] = parsed[:artist][:bio][:content]
    return lastfmHash

  end

end
