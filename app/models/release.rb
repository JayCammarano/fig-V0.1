class Release < ApplicationRecord
  validates :title, presence: true
  validates :release_type, presence: true
  validates :original_release_year, presence: true
  validate :artists_presence, on: :create
  validate :tags_presence, on: :create

  def artists_presence
   errors.add(:artist, "You must add at least one artist") unless artists.present?
  end

  def tags_presence
   errors.add(:tag, "You must add at least one tag") unless tags.present?
  end

  has_and_belongs_to_many :artists
  has_and_belongs_to_many :labels
  has_and_belongs_to_many :tags

  mount_uploader :cover_photo, AlbumCoverUploader
end
