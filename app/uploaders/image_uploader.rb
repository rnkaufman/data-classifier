class ImageUploader < CarrierWave::Uploader::Base
  def cache_dir
    '/tmp/data-classifier-cache'
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end
end
