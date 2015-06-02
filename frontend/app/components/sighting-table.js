import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  content: null,

  actions: {
    highlight: function(item) {
      this.get('events').trigger('highlight', item);
    }
  },

 didInsertElement: function() {
    var table = this.$("table").DataTable();

    this.get('events').on('select', function(model) {
      table.search(model.get('id')).draw();
    });
  }
});
