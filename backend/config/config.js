require('dotenv').config(); // Load .env file

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);

module.exports = {
  development: {
    username: process.env.DB_USER || 'hsr_user',
    password: process.env.DB_PASS || 'hsr_calcer',
    database: process.env.DB_NAME || 'hsr_database',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5433
  },
  production: {
    username: process.env.DB_USER_PROD, // Use different env vars for production
    password: process.env.DB_PASS_PROD,
    database: process.env.DB_NAME_PROD,
    host: process.env.DB_HOST_PROD,
    port: process.env.DB_PORT_PROD,
    dialect: 'postgres',
  },
};