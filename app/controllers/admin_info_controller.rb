class AdminInfoController < ApplicationController

    def show
        # binding.pry
        admin = Admin.first
        render json: admin, only: [:about], status: 200
    end

    def update
        
    end


end