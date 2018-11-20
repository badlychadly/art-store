class ProductsController < ApplicationController
    before_action :find_product, only: [:destroy]
    before_action :logged_in?, only: [:destroy, :create]
    

    def index 
        render json: Product.all
    end

    def create
        product = Product.new(product_params)
        if product.save
            render json: product, status: 201
        end
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
        params.require(:product).permit(:name, :price, :for_sale, :description, :img_url)
    end


end
