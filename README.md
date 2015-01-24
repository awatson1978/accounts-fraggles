**accounts-fraggles** is a Meteorite package to populate your Meteor.users() collection with Fraggles.


------------------------
### Installation

First, install the accounts-fraggles package from the command line, like so:

````
meteor add awatson1978:accounts-fraggles
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
    avatar: '/packages/awatson1978_accounts-fraggles/fraggles/Red.jpg'
  }
}
````

------------------------
### Default Usernames and Passwords  

Usernames and passwords for all the users should be the same.  All emails will be at the ``test.org`` domain.



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
### Example Usage  

````html
{{#each userList}}
{{profile.name}}<br>
{{/each}}
````

````js
if (Meteor.isClient) {
  Meteor.subscribe("users");

  Template.registerHelper('userList', function(){
    return Meteor.users.find();
  });
}

if (Meteor.isServer) {
  Meteor.publish("users", function(){
    return Meteor.users.find();
  });
}
````

------------------------
### License

Images are copyright Jim Henson Productions.  Don't use in production without permission.  This package is for private, non-commercial use only.
