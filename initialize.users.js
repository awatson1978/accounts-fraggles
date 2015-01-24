// if the database is empty on server start, create some sample data.
// we create a separate bootstrap.users.js file
// because we'll be wanting to set up a number of patient-scenario test users

Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    console.info('no users in database!  adding some default users');

    var userId = null;


    userId = Accounts.createUser({
      username: 'boober',
      password: 'boober',
      email: 'boober@test.org',
      profile: {
        name: 'Boober',
        role: 'Fraggle',
        avatar: '/packages/awatson1978_accounts-fraggles/fraggles/Boober.jpg'
      }
    });
    console.info('Account created: ' + userId);

    userId = Accounts.createUser({
      username: 'doozer',
      password: 'doozer',
      email: 'doozer@test.org',
      profile: {
        name: 'Doozer',
        role: 'Doozer',
        avatar: '/packages/awatson1978_accounts-fraggles/fraggles/Doozer.jpg'
      }
    });
    console.info('Account created: ' + userId);

    userId = Accounts.createUser({
      username: 'gobo',
      password: 'gobo',
      email: 'gobo@test.org',
      profile: {
        name: 'Gobo',
        role: 'Fraggle',
        avatar: '/packages/awatson1978_accounts-fraggles/fraggles/Gobo.jpg'
      }
    });
    console.info('Account created: ' + userId);

    userId = Accounts.createUser({
      username: 'red',
      password: 'red',
      email: 'red@test.org',
      profile: {
        name: 'Red',
        role: 'Fraggle',
        avatar: '/packages/awatson1978_accounts-fraggles/fraggles/Red.jpg'
      }
    });
    console.info('Account created: ' + userId);

    userId = Accounts.createUser({
      username: 'travelingmatt',
      password: 'travelingmatt',
      email: 'travelingmatt@test.org',
      profile: {
        name: 'Uncle Traveling Matt',
        role: 'Fraggle',
        avatar: '/packages/awatson1978_accounts-fraggles/fraggles/UncleTravelingMatt.jpg'
      }
    });
    console.info('Account created: ' + userId);

    userId = Accounts.createUser({
      username: 'wembley',
      password: 'wembley',
      email: 'wembley@test.org',
      profile: {
        name: 'Wembley',
        role: 'Fraggle',
        avatar: '/packages/awatson1978_accounts-fraggles/fraggles/Wembley.jpg'
      }
    });
    console.info('Account created: ' + userId);

    userId = Accounts.createUser({
      username: 'mokey',
      password: 'mokey',
      email: 'mokey@test.org',
      profile: {
        name: 'Mokey',
        role: 'Fraggle',
        avatar: '/packages/awatson1978_accounts-fraggles/fraggles/Mokey.jpg'
      }
    });
    console.info('Account created: ' + userId);





  }
});
