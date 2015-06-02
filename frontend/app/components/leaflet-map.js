import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['leaflet-map'],

  selectedModel: null,

  addModels: function(list) {},

  createMarkerForModel: function(model) {},

  didInsertElement: function() {},

  highlightModel: function(model) {}.observes('selectedModel')
});
