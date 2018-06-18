require('dotenv').load();

module.exports = {
  development: {
    client: 'pg',
    connection: `postgress:///${process.env.LOCAL_DATABASE_NAME}`
  }
};
