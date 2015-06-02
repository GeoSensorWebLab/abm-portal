import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

 didInsertElement: function() {
    this.$(".typeahead").typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'states',
      source: this.substringMatcher(this.get('source'))
    });
  },

  substringMatcher: function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      substringRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
        if (substringRegex.test(str)) {
          matches.push(str);
        }
      });

      cb(matches);
    };
  }
});
