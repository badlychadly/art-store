class Product < ApplicationRecord
    # mount_uploader :picture, PictureUploader
#     after_save :check_metadata
    has_one :picture

#   def check_metadata
#     # binding.pry
#     if !!self.picture && !!self.picture.metadata
#       exif = self.picture.metadata["width"]
#       # ...
#     end
#   end
    # accepts_nested_attributes_for :picture

    def cloud=(attr)
        self.build_picture(cloud: attr)
        binding.pry
        self.save
        self.picture.update_dimensions
    end

    # def picture_attributes=(attributes)
    #     binding.pry
    # end
    # serialize :picture, JSON
end
