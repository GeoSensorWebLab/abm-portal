import Ember from 'ember';

export default Ember.Controller.extend({
  contentAsList: function() {
    return [this.get('content')];
  }.property('content'),

  mapper: Ember.Object.createWithMixins(Ember.Evented),
  selected: function() {
    return this.get('content');
  }.property()
});
