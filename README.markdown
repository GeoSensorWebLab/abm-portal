# ABM Portal

This application is a web front end to the Arctic Bio Map server database. It provides a view into the data stored in the ABM server, allowing users to review and comment on sightings.

## Development Environment

Your dev environment will need the following libraries:

* Ruby 2.3.3 or newer
* Postgresql 9.3 or newer
* Node 6.10.0
* NPM 4.4.1

Clone the repository. In the repo, run `bundle install` to install the required Ruby gems. Run `bower install` to install the client-side libraries.

Next use Rails to initialize a database for development:

    $ rake db:create db:migrate

Then install the libraries for the Ember frontend:

    $ cd frontend
    $ npm install

Now you can start up the local Rails server, and pass in the host address for the ABM database. This app assumes the data is located at `/biomap/<resource>`.

    $ API_URL="http://example.com:8080" BASIC_USER="me" BASIC_PASS="me" rails server

The site will be running on http://localhost:3000/ by default.

## Deployment

Deployment is currently set up for an instance of [Dokku](https://github.com/progrium/dokku) running on the [Cybera Rapid Access Cloud](http://www.cybera.ca/projects/cloud-resources/rapid-access-cloud/). See the [deployment documentation for Dokku](http://progrium.viewdocs.io/dokku/application-deployment/) for more instructions.

```sh
$ git remote add dokku dokku@sarcee:abm-portal
$ git push dokku master
$ ssh dokku@sarcee domains:add abm-portal sightings.arcticconnect.ca arctic-bio-map.gswlab.ca sightings.arcticconnect.org
```

## License

MIT License

## Authors

James Badger <jpbadger@ucalgary.ca>
