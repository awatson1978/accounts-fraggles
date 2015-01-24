Package.describe({
  summary: "Adds Fraggles to the Meteor.users collection.",

  // update this value before you run 'meteor publish'
  version: "1.0.0",

  // if this value isn't set, meteor will default to the directory name
  name: "awatson1978:accounts-fraggles",

  // and add this value if you want people to access your code from Atmosphere
  git: "http://github.com/awatson1978/accounts-fraggles.git"

});

Package.on_use(function (api) {
  api.use('accounts-base@1.1.3');
  api.use('accounts-password@1.0.5');

  api.addFiles('initialize.users.js', 'server');

  api.addFiles('fraggles/Boober.jpg', "client", {isAsset: true});
  api.addFiles('fraggles/Doozer.jpg', "client", {isAsset: true});
  api.addFiles('fraggles/Gobo.jpg', "client", {isAsset: true});
  api.addFiles('fraggles/Red.jpg', "client", {isAsset: true});
  api.addFiles('fraggles/UncleTravelingMatt.jpg', "client", {isAsset: true});
  api.addFiles('fraggles/Wembley.jpg', "client", {isAsset: true});
  api.addFiles('fraggles/Mokey.jpg', "client", {isAsset: true});
});
