import Ember from 'ember';

export default Ember.Controller.extend({
  contentAsList: function() {
    return [this.get('content')];
  }.property('content'),

  mapper: Ember.Object.createWithMixins(Ember.Evented),

  actions: {
    saveStatus: function() {}
  },

  selected: function() {
    return this.get('content');
  }.property(),

  modelIsDirty: function() {
    var content = this.get('content');
    if (content.get('isDirty') || content.get('status.isDirty')) {
      this.set('canSave', true);
    } else {
      this.set('canSave', false);
    }
  }.observes('content.isDirty', 'content.status.isDirty')
});
