import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sightings', { resetNamespace: true }, function() {
    this.route('show', { path: ':sighting_id' });
  });
});

export default Router;
