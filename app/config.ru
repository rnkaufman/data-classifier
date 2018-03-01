require 'bundler'
Bundler.setup :default
require './app'
require 'sprockets'
require 'sinatra/base'

map '/assets' do
  environment = Sprockets::Environment.new
  environment.append_path 'assets/javascripts'
  environment.append_path 'assets/stylesheets'
  run environment
end

run DataClassifier
