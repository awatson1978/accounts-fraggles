**accounts-fraggles** is a Meteorite package to populate your Meteor.users() collection with Fraggles.


------------------------
### Installation

First, install the accounts-fraggles package from the command line, like so:

````
mrt add accounts-fraggles
````

Alternatively, if you'd like to bypass Atmosphere, and install directly from GitHub, you could update your application's smart.json file, like so:

````js
{
  "meteor": {
    "branch": "master"
  },
  "packages": {
    "accounts-fraggles": {
      "git": "https://github.com/awatson1978/accounts-fraggles.git"
    }
  }
}

````


------------------------
### Default User Record Schema  

The user objects are have a fairly simple document schema that looks like the following:
````js
{
  username: 'red',
  password: 'red',
  email: 'red@test.org',
  profile: {
    name: 'Red',
    role: 'Fraggle',
    avatar: '/avatars/Red.jpg'
  }
}
````

------------------------
### Default Usernames and Passwords  

Usernames and passwords for all the users should be the same.  For the most part, the username and password will both be the person's first name, but a number of users are set as the last name.  All emails will be at the ``test.org`` domain.



------------------------
### Users List

Boober
Doozer
Gobo
Mokey
Red
Uncle Traveling Matt
Wembley


------------------------
### License

Images are copyright Jim Henson Productions.  Don't use in production without permission.  This package is for private, non-commercial use only.


