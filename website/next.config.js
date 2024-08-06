// next.config.js

module.exports = {
    async headers() {
      return [
        {
          source: '/api/submitForm', // Update with your actual API route
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*', // Allow access from any origin; update this in production
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET, POST, PUT, DELETE, OPTIONS',
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'X-Requested-With, Content-Type, Accept',
            },
          ],
        },
      ];
    },
      async redirects() {
        return [
          {
            source: '/services/hearing-aid-center-in-delhi',
            destination: '/services/hearing-aid-center-in-delhi-new',
            permanent: true,
          },
          {
            source: '/services/hearing-care-solution-in-delhi',
            destination: '/services/hearing-care-solution-in-delhi-new',
            permanent: true,
          },
          {
            source: '/services/hearing-test-in-delhi',
            destination: '/services/hearing-test-in-delhi-new',
            permanent: true,
          },
          {
            source: '/services/speech-therapy-in-delhi',
            destination: '/services/speech-therapy-in-delhi-new',
            permanent: true,
          },
          {
            source: '/services/audiologist-in-delhi',
            destination: '/services/audiologist-in-delhi-new',
            permanent: true,
          },
        ]}
  };
  