/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    fingerprint: {
      enabled: false
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/leaflet/dist/leaflet.js');
  app.import('bower_components/leaflet/dist/leaflet.css');
  app.import('bower_components/leaflet.markercluster/dist/leaflet.markercluster.js');
  app.import('bower_components/leaflet.markercluster/dist/MarkerCluster.Default.css');
  app.import('bower_components/leaflet.markercluster/dist/MarkerCluster.css');

  app.import('bower_components/proj4/dist/proj4.js');
  app.import('bower_components/proj4leaflet/src/proj4leaflet.js');

  app.import('bower_components/polarmap/dist/polarmap.js');
  app.import('bower_components/polarmap/css/polarmap.css');

  app.import('bower_components/datatables/media/css/jquery.dataTables.css');
  app.import('bower_components/datatables/media/js/jquery.dataTables.js');

  app.import("bower_components/momentjs/moment.js");

  app.import("bower_components/typeahead.js/dist/typeahead.jquery.js");

  return app.toTree();
};
