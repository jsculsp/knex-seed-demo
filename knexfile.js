// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5433,
      database: 'merch',
      user: 'postgres',
      password: process.env.PG_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
}
