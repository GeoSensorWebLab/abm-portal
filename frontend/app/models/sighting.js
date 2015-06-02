import DS from 'ember-data';

export default DS.Model.extend({
  created_by: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  lat: DS.attr(),
  lon: DS.attr(),
  no_of_adults: DS.attr(),
  no_of_calves: DS.attr(),
  unusual_observations: DS.attr(),
  vsigns: DS.attr(),

  status: DS.belongsTo('sightingStatus'),

  coordinates: function() {
    return [this.get('lat'), this.get('lon')];
  }.property('lat', 'lon')
});
