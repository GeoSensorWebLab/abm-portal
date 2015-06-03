import Ember from 'ember';

export default Ember.Controller.extend({
  contentAsList: function() {
    return [this.get('content')];
  }.property('content'),

  mapper: Ember.Object.createWithMixins(Ember.Evented),

  actions: {
    commentChanged: function() {
      this.set('commentNotices', null);
      if ($("#content").val() !== "") {
        this.set('canSaveComment', true);
      } else {
        this.set('canSaveComment', false);
      }
    },

    saveComment: function() {
      var that = this;
      var comment = this.store.createRecord('comment');
      comment.setProperties({
        sighting: this.get('content'),
        content: $("#content").val()
      });

      comment.save().then(function() {
        // success
        that.set('commentNotices', 'Comment saved successfully.');
        that.set('canSaveComment', false);
        $("#content").val("");
      }, function() {
        // failure
        that.set('commentNotices', 'Comment did not save. Try again and if it continues to fail, please contact site support.');
      });
    },

    saveStatus: function() {
      this.get('content.status').save();
    }
  },

  selected: function() {
    return this.get('content');
  }.property(),

  modelIsDirty: function() {
    var content = this.get('content');
    if (content.get('isDirty') || content.get('status.isDirty')) {
      this.set('canSaveStatus', true);
    } else {
      this.set('canSaveStatus', false);
    }
  }.observes('content.isDirty', 'content.status.isDirty')
});
