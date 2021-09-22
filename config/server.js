module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 1337),
  staticWebsiteBuildURL: "https://api.netlify.com/build_hooks/61446eb81b8c11025e943663",
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
  settings: {
    cors: {
      enabled: true,
      origin: ['*']
    },
  },
});
