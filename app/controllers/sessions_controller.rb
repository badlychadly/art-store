class SessionsController < ApplicationController
  before_action :authenticate 

    def create
      binding.pry
        admin = Admin.find_by(email: auth_params[:email])
        if admin.authenticate(auth_params[:password])
          jwt = Auth.issue({user: user.id})
          render json: {jwt: jwt}
        else
        end
      end



          def logged_in?
            !!current_user
          end
          def current_user
            if auth_present?
              user = User.find(auth["user"])
              if user
                @current_user ||= user
              end
            end
          end
          def authenticate
            render json: {error: "unauthorized"}, status: 401 
              unless logged_in?
          end
          private
            def token
              request.env["HTTP_AUTHORIZATION"].scan(/Bearer 
                (.*)$/).flatten.last
            end
            def auth
              Auth.decode(token)
            end
            def auth_present?
              !!request.env.fetch("HTTP_AUTHORIZATION", 
                "").scan(/Bearer/).flatten.first
            end
        end


      def auth_params
        params.require(:auth).permit(:email, :password)
      end

end