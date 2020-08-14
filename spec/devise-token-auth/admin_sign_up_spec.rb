# # spec/requests/authentication_test_spec.rb

# require 'rails_helper'
# include ActionController::RespondWith

# # The authentication header looks something like this:
# # {"access-token"=>"abcd1dMVlvW2BT67xIAS_A", "token-type"=>"Bearer", "client"=>"LSJEVZ7Pq6DX5LXvOWMq1w", "expiry"=>"1519086891", "uid"=>"darnell@konopelski.info"}

# describe 'Whether creation and persistance is ocurring properly', type: :request do
#   before(:each) do
#     @current_user = FactoryBot.create(:user)
#   end

#   context 'context: sign up as a user, ' do
#     it "test status of sign up" do

#     headers = { "ACCEPT" => "application/json", 
#     "email" => @current_user.email,
#     "password" => @current_user.password,
#     "password_confirmation" => @current_user.password_confirmation,
#     }
    
#       post '/auth', :headers => headers

#       expect(response.status).to eq("200") 

#     end
#   end
# end