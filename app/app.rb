require 'sinatra'
require 'sinatra/base'
require 'sprockets'
require 'uglifier'
require 'sass'
require 'coffee-script'
require 'execjs'

class DataClassifier < Sinatra::Base
  set :environment, Sprockets::Environment.new
  set :root, File.dirname(__FILE__)

  configure do
    environment.append_path "assets/stylesheets"
    environment.append_path "assets/javascripts"
    environment.append_path "views/homepage.erb"
    environment.js_compressor  = :uglify
    environment.css_compressor = :scss
  end

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
