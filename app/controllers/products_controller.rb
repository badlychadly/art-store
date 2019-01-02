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
        # Cloudinary::Uploader.upload(product_params[:picture])
        # product.picture = product_params[:picture]
        if product.save
            binding.pry
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

    # <ActionController::Parameters {"name"=>"name", "price"=>"$500", "description"=>"des", "img_url"=>"https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350", "prints"=>false, "picture"=>nil, "controller"=>"products", "action"=>"create", "product"

    # <ActionController::Parameters {"name"=>"name", "price"=>"$500", "description"=>"de", "img_url"=>"", "picture"=>#<ActionDispatch::Http::UploadedFile:0x0bdf3f08 @tempfile=#<Tempfile:/tmp/RackMultipart20181231-9052-1cnf5g.png>, @original_filename="Screenshot (8).png", @content_type="image/png", @headers="Content-Disposition: form-data; name=\"picture\"; filename=\"Screenshot (8).png\"\r\nContent-Type: image/png\r\n">, "prints"=>"false", "controller"=>"products", "action"=>"create"} permitted: false>

    def product_params
        params.permit(:name, :price, :description, :img_url, :original, :prints, :picture)
        # params.require(:product).permit(:name, :price, :description, :img_url, :original, :prints, :picture)
    end


end
