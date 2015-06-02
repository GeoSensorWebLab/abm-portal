import DS from 'ember-data';

export default DS.Model.extend({
  state: DS.attr(),
  sighting: DS.belongsTo('sighting'),

  default_values: [
    "Unreviewed",
    "Needs Review",
    "Needs Discussion",
    "Reviewed"
  ]
});
