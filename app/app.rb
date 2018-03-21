require 'sinatra/base'
require 'sprockets'
require 'sass'
require 'coffee-script'
require 'execjs'
require 'sinatra/nice_easy_helpers'

class DataClassifier < Sinatra::Base
  set :environment, Sprockets::Environment.new
  set :root, File.dirname(__FILE__)
  helpers Sinatra::NiceEasyHelpers

  environment.append_path "assets/stylesheets"
  environment.append_path "assets/javascripts"
  environment.css_compressor = :scss

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

private
  def training_label_validated?
    true
  end
end
