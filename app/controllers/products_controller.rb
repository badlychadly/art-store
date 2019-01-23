class ProductsController < ApplicationController
    before_action :find_product, only: [:destroy, :create, :update]
    

    def index 
        render json: Product.all, :include => {:picture => {:only => [:width, :height, :cloud]}}
    end

    def create
        product = Product.new(product_params)
        if product.save
            # product.picture.cloud has no file and has cache_storage = CarrierWave::Storage::File:
            # new_product.picture.cloud has a file = Cloudinary::CarrierWave::CloudinaryFile:
            stored_product = Product.find_by(id: product.id)
            render json: stored_product, :include => {:picture => {:only => [:width, :height, :cloud]}}, status: 201
        end
    end

    def update
        @product.update_attributes(product_params)
            render json: @product, :include => {:picture => {:only => [:width, :height, :cloud]}}, status: 202
    end

    def destroy
        @product.destroy
        render json: @product, status: 204
    end


    private

    def find_product
        @product = Product.find_by(id: params[:id])
    end


    def product_params
        params.permit(:name, :price, :description, :img_url, :original, :prints, :cloud)
        # params.require(:product).permit(:name, :price, :description, :img_url, :original, :prints, :picture)
    end


end
