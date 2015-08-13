var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'my-book-inventory'
    },
    port: 3000,
    db: 'mongodb://localhost/my-book-inventory-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'my-book-inventory'
    },
    port: 3000,
    db: 'mongodb://localhost/my-book-inventory-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'my-book-inventory'
    },
    port: 3000,
    db: 'mongodb://localhost/my-book-inventory-production'
  }
};

module.exports = config[env];
