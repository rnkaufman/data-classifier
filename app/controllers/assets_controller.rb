class Assets < Sinatra::Base
  configure do
    set :assets, (Sprockets::Environment.new { |env|
      env.append_path(settings.root + "/assets/images")
      env.append_path(settings.root + "/assets/javascripts")
      env.append_path(settings.root + "/assets/stylesheets")

      # compress everything in production
      if ENV["RACK_ENV"] == "production"
        env.js_compressor  = YUI::JavaScriptCompressor.new
        env.css_compressor = YUI::CssCompressor.new
      end
    })
  end

  get "/assets/app.js" do
    content_type("application/javascript")
    settings.assets["app.js"]
  end

  get "/assets/app.css" do
    content_type("text/css")
    settings.assets["app.css"]
  end
end
