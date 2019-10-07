module.exports = {
  name: "adamite-hello-world",

  api: {
    // TODO: CHANGE THIS!
    secret: "abcd1234==",

    admins: {
      root: "1234"
    }
  },

  auth: {
    // TODO: CHANGE THIS!
    secret: "abcd1234=="
  },

  database: {
    adapter: require("@adamite/service-database/adapters/rethinkdb"),
    rules: require("./database/rules")
  },

  functions: {
    root: require("./functions"),
    sdk: {
      // TODO: Add your SDK configuration here!
    }
  }
};
