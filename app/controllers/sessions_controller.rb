class SessionsController < ApplicationController
  # skip_before_action :authenticate


    def create
      # binding.pry
        admin = Admin.find_by(username: auth_params[:username])
        if admin.authenticate(auth_params[:password])
          jwt = Auth.issue({admin: admin.id})
          render json: {jwt: jwt}
        else
        end
      end





      def auth_params
        params.require(:auth).permit(:username, :password)
      end

end