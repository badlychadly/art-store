class AdminInfoController < ApplicationController

    def show
        admin = Admin.first
        # binding.pry
        render json: admin, only: [:about], status: 200
    end

    def update
        admin = Admin.first
        # binding.pry
        admin.update(admin_params)
        render json: admin, only: [:about], status: 200
    end

    private
    
    def admin_params
        params.require(:admin_info).permit(:about)
    end


end