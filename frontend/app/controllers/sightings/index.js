import Ember from 'ember';

export default Ember.Controller.extend({
  activeContent: function() {
    return this.get('content');
  }.property(),

  mapper: Ember.Object.createWithMixins(Ember.Evented),

  actions: {
    filter: function(interval) {
      if (interval === 0) {
        this.set('activeContent', this.get('content'));
      } else {
        this.set('activeContent', this.filteredContent(interval));
      }
    }
  },

  filteredContent: function(interval) {
    var now = moment();

    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      content: this.get('content')
    }).filter(function(item) {
      var date = moment(item.get('created_at'));
      return (now - date)/1000 <= interval;
    });
  },

  init: function() {
    var that = this;
    this.get('mapper').on('highlight', function(item) {
      that.set('selected', item);
    });

    this._super.apply(this, arguments);
  },

  selectionChanged: function() {
    this.get('mapper').trigger('select', this.get('selected'));
  }.observes('selected')
});
