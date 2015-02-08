Package.describe({
  summary: "Add image and content overlays to a Clinical Meteor app.",

  // update this value before you run 'meteor publish'
  version: "1.0.0",

  // if this value isn't set, meteor will default to the directory name
  name: "clinical:overlays",

  // and add this value if you want people to access your code from Atmosphere
  git: "http://github.com/awatson1978/clinical-overlays.git"

});

Package.on_use(function (api) {
    api.use('standard-app-packages','client');
    api.use('templating','client');

    api.add_files('overlay.html', "client");
    api.add_files('overlay.css', "client");
    api.add_files('overlay.js', "client");
});
