class ProductsController < ApplicationController

    def index 
        render json: Product.all
    end

    def create
        product = Product.new(product_params)
        if product.save
            render json: product
        end
    end


    private

    def find_product
        @product = Product.find_by(id: params[:id])
    end

    def product_params
        params.require(:product).permit(:name, :price, :for_sale, :description, :img_url)
    end


end
