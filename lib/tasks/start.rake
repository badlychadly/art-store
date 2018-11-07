
task :start do
    exec 'foreman start -p 3000'
  end

task :figaro do 
  exec 'bundle exec figaro install'
end