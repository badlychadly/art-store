class Product < ApplicationRecord

    has_one :picture, dependent: :destroy

    # accepts_nested_attributes_for :picture
    # serialize :picture, JSON

    def cloud=(attr)
        self.build_picture(cloud: attr)
        self.save
    end

end
