class SessionsController < ApplicationController
  # skip_before_action :authenticate


  def create
      admin = Admin.find_by(email: auth_params[:email])
      if !!admin && admin.authenticate(auth_params[:password])
        jwt = Auth.issue({admin: admin.id})
        admin.update(signed_in: true)
        render json: {jwt: jwt}
      else
        render json: {status: 401, message: "incorrect credentials"}
        # render json: {body: "invalid credentials"}, status: 401
      end
    end

  def verify
    if logged_in?
      render json: {admin: true}, status: 200
    else 
      authenticate
    end
  end

  def destroy
    current_user.update(signed_in: false)
    render json: {message: "successful"}, status: 200
  end
      
    





  def auth_params
    params.require(:auth).permit(:email, :password)
  end

end