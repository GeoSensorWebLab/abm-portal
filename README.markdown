# ABM Portal

This application is a web front end to the Arctic Bio Map server database. It provides a view into the data stored in the ABM server, allowing users to review and comment on sightings.

## Development Environment

Your dev environment will need the following libraries:

* Ruby 2.2.1 or newer
* Postgresql 9.3 or newer

Clone the repository. In the repo, run `bundle install` to install the required Ruby gems. Run `bower install` to install the client-side libraries.

Next use Rails to initialize a database for development:

    $ rake db:create db:migrate

Now you can start up the local Rails server:

    $ rails server

The site will be running on http://localhost:3000/ by default.

## Deployment

TODO: Write up deploying to a Heroku/dokku instance
