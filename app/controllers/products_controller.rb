class ProductsController < ApplicationController
    # before_action :find_product, only: [:destroy, :update]
    before_action :authenticate, :find_product, only: [:destroy, :create, :update]
    # HANDLE WHEN USER TRIES TO MAKE REQUEST WITH AUTHENTICATION
    # USE REDUX IN FRONT END TO AUTHENTICATE IF SESSION TOKEN IS REAL
    

    def index 
        render json: Product.all
    end

    def create
        # binding.pry
        product = Product.new(product_params)
        if product.save
            render json: product, status: 201
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

    def product_params
        params.require(:product).permit(:name, :price, :description, :img_url, :original, :prints, :picture)
    end


end
