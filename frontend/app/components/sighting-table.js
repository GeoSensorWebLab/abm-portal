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

    // Filter the table by the ID attribute when changes are made to the
    // input field for the ID column.
    $("input[name=id-filter]").on('keyup change', function() {
      var column = table.column(":contains(ID)");

      if (this.value === "") {
        column.search("").draw();
      } else if (column.search() !== this.value) {
        column.search(`^${this.value}$`, true, false).draw();
      }
    });

    // When a 'select' event external to this component is triggered, then
    // filter the table by that model's ID attribute.
    this.get('events').on('select', function(model) {
      var column = table.column(":contains(ID)");
      var id = model.get('id');
      $("input[name=id-filter]").val(id);
      column.search(`^${id}$`, true, false).draw();
    });
  },

  reset: function() {
    this.get('table').destroy();
    this.rerender();
    var table = this.$("table").DataTable();
    this.set('table', table);
  }

});
