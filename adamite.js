module.exports = {
  api: {
    key: "38c56577-a46c-4d22-83f4"
  },

  services: [
    {
      name: "database",
      service: require("@adamite/service-database"),
      options: {
        adapter: new require("@adamite/service-database/adapters/rethinkdb")({
          host: "localhost",
          port: 28015,
          defaultDb: "default"
        }),
        rules: require("./database/rules")
      }
    },
    {
      name: "auth",
      service: require("@adamite/service-auth"),
      options: {
        secret: "abcd1234=="
      }
    },
    {
      name: "functions",
      service: require("@adamite/service-functions"),
      options: {
        root: require("./functions"),
        sdk: {}
      }
    }
  ]
};
