class SessionsController < ApplicationController
  def callback
    #omniauth.auth環境変数を取得
    auth = request.env["omniauth.auth"]

    #Userモデルを検索
    user = User.find_by_provider_and_uid(auth["provider"], auth["uid"]) 

    unless user 
      user = User.create_with_omniauth(auth)
    end

     session[:user_id] = user.id
     redirect_to root_url, :notice => "Log in"
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, :notice => "Log out"
  end
end
