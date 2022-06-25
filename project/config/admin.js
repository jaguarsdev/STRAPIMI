module.exports = ({ env }) => ({
  // url: '/dashboard',
  autoOpen: true,
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
