module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5f1a9591469a91f87ef6bcffde64be3c'),
  },
});
