import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["inline"],

  relativeDate: function() {
    return moment(this.get('content')).fromNow();
  }.property('content')
});
