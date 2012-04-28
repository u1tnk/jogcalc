if Rails.env.development? 
  OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE 
end
Rails.application.config.middleware.use OmniAuth::Builder do
  #provider :twitter,"Consumer key","Consumer secret"
  provider :facebook,ENV['JOGCALC_FACEBOOK_APP_ID'],ENV['JOGCALC_FACEBOOK_APP_SECRET']
end
