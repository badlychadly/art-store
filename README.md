# art-store

art-store is an online store to give an artist the power to manage and sell their work. The owner or admin of the site is able to upload content from a local computer with a description, price, and name. Then it is displayed for a customer to see and purchase. Admin has access to all crud operations.

## Prereqs

This app uses Rails Api 5.2.1 for the backend and React 16.7.0 for the frontend. It also uses a cloudinary which requires an account [cloudinary](https://cloudinary.com/) to store images.

##Installation

To run this app on your local machine in the dev environment fork and clone this repo.

Change to the art-store directory then run
```
rails db:migrate 
```
Now to add the needed packages we must change in to client directory and run npm install
```
cd client
npm install
```
This app uses Figaro gem for configuration with rails ENV, [Figaro docs](https://github.com/laserlemon/figaro) are helpfull, when we run figaro it creates a config/application.yml file for our secrets. A rake command exists in this app so in the art-store directory all you need to run is 
```
rake figaro
```
Now define your secrets in the new config/application.yml file. Rails has a command to generate a secret for you, and it's best to use AUTH_SECRET: since that is what the app is built on already.
```
rake secret
#6d5eff6082e4c54f96934decbb61d5113ef2164a79466363e44739421bb4467280de4e554f3fac8b9996ade3a64558d6b69c043bba954261af3dd73fd5041205
#use the secret in application.yml
AUTH_SECRET: "6d5eff6082e4c54f96934decbb61d5113ef2164a79466363e44739421bb4467280de4e554f3fac8b9996ade3a64558d6b69c043bba954261af3dd73fd5041205"
```
All that is left to do is to set up your cloudinary account and use those credentials is the same file as your secret.
```
CLOUDINARY_CLOUD_NAME: ""
CLOUDINARY_API_KEY: "" 
CLOUDINARY_API_SECRET: ""
CLOUDINARY_URL: ""
```
This app uses the gem [Foreman](https://github.com/ddollar/foreman) to run the front and back end servers. Foreman requires a Procfile and workers to be defined, then the foreman command can be run but lib/tasks has a rake task for this so all that is required of you is to run 
```
rake start
```

##Usage
You will need to create a new admin in the rails server with a password and email, there is seed data available although it is not recommended because the Products model will have trouble saving your url as the carrierwave picture uploader attribute, so it is best to just start from scratch and use the form on the site.


##Contributing
If you wish to report any bugs or have improved the code I would like to hear from you so reach out to me on github with a pull request or open an issue.

##License 
This app contains an MIT License in the root directory