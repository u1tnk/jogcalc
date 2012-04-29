class User < ActiveRecord::Base
  attr_accessible :name, :provider, :uid

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]

      if user.provider == "facebook"
         user.name = auth["info"]["name"]
      else
         user.name = auth["info"]["nickname"]
      end

    end
  end
end
