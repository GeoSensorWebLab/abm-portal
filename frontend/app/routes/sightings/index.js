import Ember from 'ember';
import Sighting from '../../models/sighting';

export default Ember.Route.extend({
  model: function() {
    var store = this.store;
    store.pushPayload('sighting', {
      sightings: window.sightings
    });

    return store.all('sighting');
  }
});
