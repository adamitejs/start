module.exports = {
  api: {
    // TODO: CHANGE THIS!
    secret: "abcd1234=="
  },

  services: {
    functions: {
      service: require("@adamite/service-functions"),
      config: {
        root: require("./functions"),
        sdk: {}
      }
    },

    database: {
      service: require("@adamite/service-database"),
      config: {
        adapter: new require("@adamite/service-database/adapters/rethinkdb")({
          host: "localhost",
          port: 28015
        }),
        rules: require("./database/rules")
      }
    },

    auth: {
      service: require("@adamite/service-auth"),
      config: {
        secret: "abcd1234=="
      }
    }
  }
};
