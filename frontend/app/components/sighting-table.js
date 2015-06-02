import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  content: null,

  actions: {
    highlight: function(item) {
      this.get('events').trigger('highlight', item);
    }
  },

  contentChanged: function() {
    this.reset();
  }.observes('content'),

 didInsertElement: function() {
    var table = this.$("table").DataTable();
    this.set('table', table);

    this.get('events').on('select', function(model) {
      table.search(model.get('id')).draw();
    });
  },

  reset: function() {
    this.get('table').destroy();
    this.rerender();
    var table = this.$("table").DataTable();
    this.set('table', table);
  }

});
