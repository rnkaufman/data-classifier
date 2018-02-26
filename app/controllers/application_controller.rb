require 'sinatra'

class ApplicationController < Sinatra::Base

get '/' do
  erb :homepage
end

post '/' do
  redirect to('/label')
end

get '/label' do

end
