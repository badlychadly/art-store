class Picture < ApplicationRecord
    mount_uploader :cloud, PictureUploader
    belongs_to :product 

    after_save :update_dimensions,
        if: Proc.new {|picture| picture.width.nil? && picture.height.nil?} 

    def update_dimensions 
        if !!self.cloud && !!self.cloud.metadata
            self.update_attributes(width: self.cloud.metadata["width"], height: self.cloud.metadata["height"] )
            self
        end 
    end
end
