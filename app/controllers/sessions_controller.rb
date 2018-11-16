class SessionsController < ApplicationController
  # skip_before_action :authenticate


    def create
        admin = Admin.find_by(username: auth_params[:username])
        if !!admin && admin.authenticate(auth_params[:password])
          jwt = Auth.issue({admin: admin.id})
          render json: {jwt: jwt}
        else
          render json: {status: 401, message: "incorrect credentials"}
          # render json: {body: "invalid credentials"}, status: 401
        end
      end





      def auth_params
        params.require(:auth).permit(:username, :password)
      end

end