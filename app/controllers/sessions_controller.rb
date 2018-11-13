class SessionsController < ApplicationController
  # skip_before_action :authenticate


    def create
        admin = Admin.find_by(username: auth_params[:username])
        if !!admin && admin.authenticate(auth_params[:password])
          jwt = Auth.issue({admin: admin.id})
          render json: {jwt: jwt}
        else
          render json: admin, status: 404, message: 'incorrect credentials homie'
        end
      end





      def auth_params
        params.require(:auth).permit(:username, :password)
      end

end