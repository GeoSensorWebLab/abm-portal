import Ember from 'ember';

export default Ember.ArrayController.extend({
  mapper: Ember.Object.createWithMixins(Ember.Evented),

  init: function() {
    var that = this;
    this.get('mapper').on('highlight', function(item) {
      that.set('selected', item);
    });

    this._super.apply(this, arguments);
  }
});
