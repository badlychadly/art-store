class AdminInfoController < ApplicationController
    before_action :authenticate, only: [:update]

    def show
        admin = Admin.first
        render json: admin, only: [:about], status: 200
    end

    def update
        admin = Admin.first
        admin.update(admin_params)
        render json: admin, only: [:about], status: 200
    end

    def messages
        
    end

    def create_messages
        binding.pry
    end

    private
    
    def admin_params
        params.require(:admin_info).permit(:about)
    end


end