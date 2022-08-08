const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const { NODE_ENV, PORT, DB_USER_NAME, DB_PASSWORD, DB_SCHEMA, DB_HOST, DB_PORT } = process.env;
module.exports = {
    env: NODE_ENV,
    port: PORT,
    DB_USER_NAME: DB_USER_NAME,
    DB_PASSWORD: DB_PASSWORD,
    DB_SCHEMA: DB_SCHEMA,
    DB_HOST: DB_HOST,
    DB_PORT: DB_PORT
}