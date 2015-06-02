import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('sightings', function() {
    this.route('sighting', { path: '/sightings/:sighting_id' });
  });
});

export default Router;
