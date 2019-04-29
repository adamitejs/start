module.exports = {
  "name": "adamite-hello-world",

  "api": {
    "secret": "abcd1234==",
    
    "admins": {
      "jesse": "1234"
    }
  },

  "database": {
    "rules": require('./database/rules')
  }
}