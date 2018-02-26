require 'sinatra'
require 'pry'
require 'sinatra/flash'

enable :sessions

get '/' do
  erb :homepage
end

post '/' do
  if training_label_validated?
    @training_data = JSON.parse(params["training_data"])
    @training_labels = JSON.parse(params["training_labels"])
    erb :training
  else
    erb :homepage
  end
end

get '/labels' do

end

private
def training_label_validated?
  true
end
