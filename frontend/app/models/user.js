import DS from 'ember-data';

export default DS.Model.extend({
  address: DS.attr(),
  email: DS.attr(),
  name: DS.attr()
});
