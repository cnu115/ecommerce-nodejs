const { DB_USER_NAME, DB_PASSWORD, DB_SCHEMA, DB_HOST, DB_PORT } = require('./systemConfig')
module.exports = {
  development: {
    username: DB_USER_NAME,
    password: DB_PASSWORD,
    database: DB_SCHEMA,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  }
}