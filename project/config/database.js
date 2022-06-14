module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi_me'),
      user: env('DATABASE_USERNAME', 'STRROOT'),
      password: env('DATABASE_PASSWORD', 'S46537678'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
