Package.describe({
  summary: "Adds Fraggles to the Meteor.users collection."
});

Package.on_use(function (api) {
  api.add_files('bootstrap.users.js', 'server');

  api.add_files('fraggles/Boober.jpg', "client", {isAsset: true});
  api.add_files('fraggles/Doozer.jpg', "client", {isAsset: true});
  api.add_files('fraggles/Gobo.jpg', "client", {isAsset: true});
  api.add_files('fraggles/Red.jpg', "client", {isAsset: true});
  api.add_files('fraggles/UncleTravelingMatt.jpg', "client", {isAsset: true});
  api.add_files('fraggles/Wembley.jpg', "client", {isAsset: true});
  api.add_files('fraggles/Mokey.jpg', "client", {isAsset: true});
});


