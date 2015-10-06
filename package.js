Package.describe({
  summary: "Add image and content overlays to a Clinical Meteor app.",

  // update this value before you run 'meteor publish'
  version: "1.1.1",

  // if this value isn't set, meteor will default to the directory name
  name: "clinical:overlays",

  // and add this value if you want people to access your code from Atmosphere
  git: "http://github.com/awatson1978/clinical-overlays.git"

});

Package.on_use(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('less');
  api.use('clinical:modals@0.0.1');

  api.addFiles('lib/overlay.js', "client");

  api.addFiles('components/overlay/overlay.html', "client");
  api.addFiles('components/overlay/overlay.js', "client");
  api.addFiles('components/overlay/overlay.less', "client");

  api.export('Overlay');
});


Package.onTest( function (api) {
  api.use('tinytest');
  api.use('clinical:overlays');
  api.use('clinical:verification');
  api.addFiles('tests/overlays.js');
});
