task :default => [:git]
multitask :dependencies => [:node_dependencies, :ruby_dependencies]
@run_options = {verbose: Rake.application.options.trace}
NYAN_REPORTER = 'nyan'

task :ruby_dependencies do
	rake_sh 'bundle install --path gems'
end

task :node_dependencies do
	rake_sh 'npm update'
end

task :git => :ruby_dependencies do 
	require 'bundler/setup'
	require 'git_repository'
	message = ENV['m']
	raise 'no commit message specified' if message.nil?
	git = GitRepository.new
	git.pull
	git.add
	git.commit(message: message )
	git.push
end

def committing_code?
	ENV['m'] != nil
end

def rake_sh(command)
	sh command, @run_options
end