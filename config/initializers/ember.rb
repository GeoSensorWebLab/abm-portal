EmberCLI.configure do |c|
  c.build_timeout = 10
  c.app :frontend, path: Rails.root.join('frontend').to_s
end
