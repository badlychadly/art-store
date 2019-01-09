class ProductsController < ApplicationController
    # before_action :find_product, only: [:destroy, :update]
    before_action :find_product, only: [:destroy, :create, :update]
    # HANDLE WHEN USER TRIES TO MAKE REQUEST WITH AUTHENTICATION
    # USE REDUX IN FRONT END TO AUTHENTICATE IF SESSION TOKEN IS REAL
    

    def index 
        render json: Product.all
    end

    def create
        product = Product.new(product_params)
        if product.save
            # product.picture has no file and has cache_storage = CarrierWave::Storage::File:
            # new_product.picture has a file = Cloudinary::CarrierWave::CloudinaryFile:
            binding.pry
            # width, height = product.picture.metadata['width'], product.picture.metadata['height']
            new_product = Product.find_by(id: product.id)
            # new_product.to_json(:include => :picture)
            render json: new_product, :include => {:picture => {:only => [:width, :height, :cloud]}}, status: 201
        end
    end

    def update
        @product.update_attributes(product_params)
        render json: @product, status: 202
    end

    def destroy
        @product.destroy
        render json: @product, status: 204
    end


    private

    def find_product
        @product = Product.find_by(id: params[:id])
    end

#    p = Product.new(product_params)
#    PictureUploader.new(attributes)
#    Picture.new(cloud: product_params[:picture])
#    self.build_picture(cloud: attr)

    def product_params
        params.permit(:name, :price, :description, :img_url, :original, :prints, :cloud)
        # params.require(:product).permit(:name, :price, :description, :img_url, :original, :prints, :picture)
    end


end
