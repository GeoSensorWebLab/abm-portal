import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.getById('sighting', params.sighting_id);
  }
});
