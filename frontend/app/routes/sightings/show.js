import Ember from 'ember';
import Sighting from '../../models/sighting';

export default Ember.Route.extend({
  model: function(params, transition) {
    var store = this.store;
    store.pushPayload('sighting', {
      sightings: window.sightings
    });

    return store.find('sighting', params.sighting_id);
  }
});
