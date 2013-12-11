Package.describe({
  summary: "Meteorite package to add image and tutorial overlays, using reactive spark templates."
});

Package.on_use(function (api) {
    api.use('standard-app-packages','client');
    api.use('templating','client');

    api.add_files('overlay.html', "client");
    api.add_files('overlay.css', "client");
    api.add_files('overlay.js', "client");
});
