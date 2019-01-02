class Product < ApplicationRecord
    mount_uploader :picture, PictureUploader
    # accepts_nested_attributes_for PictureUploader
    # serialize :picture, JSON
end
