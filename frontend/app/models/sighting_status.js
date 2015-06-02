import DS from 'ember-data';

export default DS.Model.extend({
  state: DS.attr(),
  sighting: DS.belongsTo('sighting')
});
