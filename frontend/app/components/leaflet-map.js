import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['leaflet-map'],

  selectedModel: null,

  addModels: function(list) {},

  createMarkerForModel: function(model) {},

  didInsertElement: function() {
    var map = L.map(this.get('element'));
    this.set('map', map);

    map.setView([0,0], 0);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  },

  highlightModel: function(model) {}.observes('selectedModel')
});
