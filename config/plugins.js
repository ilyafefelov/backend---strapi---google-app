const fs  = require('fs');

module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
    actionOptions: {
      upload: {
        folder: 'strapi'
      },
      delete: {},
    },
  },
  email: {
    provider: 'nodemailer',
    providerOptions: {
      secure: true,
      host: 'mail.privateemail.com',
      port: 465,
      auth: {
        // type: env('login'),
        user: 'fefelov@full-iron.online',
        pass: 'zolototo22',
      },
      dkim: {
        domainName : 'full-iron.online',
        keySelector: 'default', // the same as the one set in DNS txt record, use online dns lookup tools to be sure that is retreivable
        privateKey: fs.readFileSync('./dkim-private.pem', 'utf8'),
        // privateKey: "-----BEGIN RSA PRIVATE KEY----- MIIEpAIBAAKCAQEAsmASADWRQAzSPAuFheV55WD9LprhDbrv9cma2md0WIgnJhNf rWm8SN9rZ2LF2CIh3rlJyuVBXcfvOE6ipvl3UQpyPS7f2y1Qi5/dRI/aqm460rZ1 KGdTdITXm2YCvf2NA20zyBkklHYDO3SAAgCmBcEleJ9b7d6VoXlcYjzGGuwtNmcC NVkC7W7SX/8F9o5oPZdbSV5gsIg4YMp+xoLE9Dx1LvPJVztD+zn42DNFITkQH38e Q4/x4UVnPqJDr7y3X3lc7cN7ZPNR+OrCtcNAT0MrHH7zJ3BgzZ91qiZ/wwPtcpPJ ZVynGa9vNjc4eeahyUmJP5HOK2dI2T47+z+7JwIDAQABAoIBAEZ85GAkyvNOnb2Q qAETf6n/O82w8oJkfvLX6lOoUjeyBhZrzYFPqVH6yAyg4aHZSx0ih2CgW8ZdfdD4 chodtuLVh/NZlKieLZgfYmb3meeDi8c8xutieX4wCKumEitWCOVzv+Sw2t24DOrv zK39552ah940yzUiomqe9Lz1WyvDw+bX1Hga1ivnnLF9Bt0n0JlA4GeZWy7S4iVW wJ9k44dtw2gwSxhqOvFsYm2FuIxz2tj7WbiW55GonR8aMHP5tV2EIDr1qOMGqcyT 84DaVlWG0b3TKgzRkYhL+c7eELF3NU83BIow0K1xtd4YR9ZaPW+SdXS2YcpEm93D mWNiGhECgYEA2bMorR8hWw5huEKZ1sVadfexfhjsmzug+jI6ha3kvnfmv0njRCPy QzxEpdCifBVYItGVNzQLizeWmPYDHir5bJTDsUDoD/7F3vK6TpV5L9efzY9P/yh9 0Alprp8DWEyN23SaIU1HKiiEModV7zyJbK0yiGEiuIyGn3yRsuLi1QUCgYEA0cHM SWxXgJTMNh4rRmFlJ/AK5XfV9Q+K42V+dRJQxnzL6AMJ4nzBtEydtKyBDD4SALC4 tUzqjORlxKiXZrK++BUWw08rNlR86oBAOqq9QGkdnBjUK85voE6QgBnT3I8xvOsN Xp4H+gYAo8jvbBZ0y4VOXl5n5yy+APBXI1mHhzsCgYEAikXLPjqZmxZFZx2WTN3J GUicCfWWwvpaws+IcEQFGB1cCH/LxAn45E+xYohjy+BavLLVzdxWwLQsCTeov06Y YikTKtCJFS/DSlptj2BNOt//9jZinzR+xNZVs734B+uH5q3m/+PvoY1eeiGPqYaP 2uEfSZQ403MeRsp+WFrXrGkCgYEAvWrSviM2SYkVeHF6Bs6A+LXOQTYcYnasp3jJ 35Kwmu2rfVLxJDQhAF6Hs9ZrmtCalUEBK8fPr3e5ZwQP5M/ZoFH7AliF30Qgoes7 FT+GM5o5APNy9jQvnYYU+3lXVr+A3OcuZZkz/tZY0Y7slqEYy4kQIiwCjEJdOp/P ML7yom0CgYBK4HsrASxuth6Mw6pQhLIh84OwNnD+xVNednkrUixTkMCoUIthIHvu RsqAjWvJ9LUNfp6pbqZ+vhOGX2dH0w6GoQSsJ6SzuA8FwjUWy3qbwih+32LPik/E wwWm1iuUD/h6kzihO891OoTmHIfPedsE8fL2hRD+rf/rEqirCsTqdA== -----END RSA PRIVATE KEY-----",
      },
      tls: {
        rejectUnauthorized: false
      }
      // ... any custom nodemailer options
    },
    settings: {
      defaultFrom: 'fefelov@full-iron.online',
      defaultReplyTo: 'fefelov@full-iron.online',
    },
  },
  // email: {
  //   provider: 'nodemailer',
  //   providerOptions: {
  //     secure: env('true'),
  //     host: env('SMTP_HOST', 'mail.privateemail.com'),
  //     port: env('SMTP_PORT', 465),
  //     auth: {
  //       // type: env('login'),
  //       user: env('fefelov@full-iron.online'),
  //       pass: env('zolototo22'),
  //     },
  //     tls: {
  //       rejectUnauthorized: false
  //     }
  //     // ... any custom nodemailer options
  //   },
  //   settings: {
  //     defaultFrom: 'fefelov@full-iron.online',
  //     defaultReplyTo: 'fefelov@full-iron.online',
  //   },
  // },
  // email: {
  //   provider: 'sendmail',
  //   settings: {
  //     defaultFrom: 'fefelov@full-iron.online',
  //     defaultReplyTo: 'fefelov@full-iron.online',
  //   },
  // },
  // },
  // email: {
  //   provider: 'sendmail',
  //   providerOptions: {
  //     dkim: {
  //       privateKeyprivateKey: fs.readFileSync('./dkim-private.pem', 'utf8'),
  //       keySelector: 'default', // the same as the one set in DNS txt record, use online dns lookup tools to be sure that is retreivable
  //     }
  //   },
  //   settings: {
  //     defaultFrom: 'fefelov@full-iron.com',
  //     defaultReplyTo: 'fefelov@full-iron.com',
  //   },
  // },
  // ...
});
