class SessionsController < ApplicationController

    def create
        admin = Admin.find_by(email: auth_params[:email])
        if admin.authenticate(auth_params[:password])
          jwt = Auth.issue({user: user.id})
          render json: {jwt: jwt}
        else
        end
      end

      private
      def auth_params
        params.require(:auth).permit(:email, :password)
      end

end