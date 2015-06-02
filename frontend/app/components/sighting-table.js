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
    this.$("table").DataTable();
  }
});
