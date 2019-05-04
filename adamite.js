module.exports = {
  "name": "adamite-hello-world",

  "api": {
    "secret": "abcd1234==",
    
    "admins": {
      "jesse": "1234"
    }
  },

  "auth": {
    "secret": "abcd1234=="
  },

  "database": {
    "adapter": require('@adamite/service-database/adapters/rethinkdb'),
    "rules": require('./database/rules')
  }
}