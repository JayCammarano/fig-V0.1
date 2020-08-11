class Release < ApplicationRecord
  validates :title, presence: true
  validates :release_type, presence: true
  validates :original_release_year, presence: true
  validate :artists_presence, on: :create

  has_many :images, as: :imageable
  def coverCaller
    if self.images.first
    image_url = self.images.first.attachment.url
    end
  end

  def artists_presence
   errors.add(:artist, "You must add at least one artist") unless artists.present?
  end
  
  def artistImageCaller
    artists = []
    self.artists.each do |artist|
      if artist.images.first
      artistImage = artist.images.first.attachment.url
      end
      artists << {id: artist.id, name: artist.name, image: artistImage}
    end
    
    artists
    
  end
  has_and_belongs_to_many :artists
  has_and_belongs_to_many :labels
  has_and_belongs_to_many :tags

end
