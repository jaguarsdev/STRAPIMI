module.exports = ({ env }) => ({
  host: env('HOST', '37.32.30.179'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
