class Product < ApplicationRecord
    mount_uploader :picture, PictureUploader
    after_save :check_metadata

  def check_metadata
    # binding.pry
    if !!self.picture && !!self.picture.metadata
      exif = self.picture.metadata["width"]
      # ...
    end
  end
    # accepts_nested_attributes_for PictureUploader
    # serialize :picture, JSON
end
