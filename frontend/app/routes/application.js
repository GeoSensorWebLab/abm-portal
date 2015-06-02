import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.store.pushPayload('sighting', {
      sightings: window.sightings
    });

    this._super.apply(this, arguments);
  }
});
