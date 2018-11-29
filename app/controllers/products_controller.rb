class ProductsController < ApplicationController
    # before_action :find_product, only: [:destroy, :update]
    before_action :logged_in?, :find_product, only: [:destroy, :create, :update]
    

    def index 
        render json: Product.all
    end

    def create
        product = Product.new(product_params)
        if product.save
            render json: product, status: 201
        end
    end

    def update
        # binding.pry
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
        params.require(:product).permit(:name, :price, :description, :img_url, :original, :prints)
    end


end
