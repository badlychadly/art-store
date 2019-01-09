class Picture < ApplicationRecord
    mount_uploader :cloud, PictureUploader
    belongs_to :product 

    # after_initialize :update_dimensions 

def update_dimensions 
    # binding.pry
    if !!self.cloud && !!self.cloud.metadata
        # self.width = self.cloud.metadata["width"] 
        # self.height = self.cloud.metadata["height"] 
        self.update_attributes(width: self.cloud.metadata["width"], height: self.cloud.metadata["height"] )
        self
    # TODO: Update model entity 
  end 
end
end
