require 'bundler/setup'
require 'json'
require 'sinatra'
require 'sass'
require 'erb'
require 'sinatra/assetpack'
require 'omniauth-authic'
require 'rack/ssl-enforcer'
require 'uri'

configure { set :server, :puma }

require 'uri'

class App < Sinatra::Application
	register Sinatra::AssetPack
	assets do
		js :application, [
			'js/*.js'
		]

		css :application, [
			'css/*.css'
		]

		js_compression :jsmin
		css_compression :sass
	end

	not_found do
	  status 404
	  erb :not_found, :layout => :error_layout
	end
	
	error do
	  erb :error, :layout => :error_layout
	end

	def initialize(app=nil)
		super(app)
	end

	get '/' do
		erb :index
	end

	get '/junior' do
		erb :junior
	end

	get '/youthhack' do
		erb :youthhack
	end

	get '/youthhack-june2016' do
		erb :youthhack_june2016
	end

	get '/sponsor/senior' do
		erb :senior_sponsor
	end

	get '/youthhack/2016/june' do
		erb :youthhack_june2016
	end

	get '/youthhack/2016/feb' do
		erb :youthhack_feb2016
	end
end