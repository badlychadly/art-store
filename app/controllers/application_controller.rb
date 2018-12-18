class ApplicationController < ActionController::API



    def logged_in?
      !!current_user
    end

    def current_user
      if auth_present?
        begin
          admin = Admin.find_by(id: auth["admin"])
          if admin
            @current_user ||= admin
          end
        rescue JWT::DecodeError
          admin
        end
      end
    end

    def authenticate
      render json: {error: "unauthorized"}, status: 401 unless logged_in?
    end

    private


      def token
        pattern = /^Bearer /
        auth_header = request.env["HTTP_AUTHORIZATION"]
        auth_header.gsub(pattern, '') if auth_header && auth_header.match(pattern)
      end

      def auth
        Auth.decode(token)
      end

      def auth_present?
        !!request.env.fetch("HTTP_AUTHORIZATION", 
          "").gsub(/^Bearer /, '')
      end 
end
