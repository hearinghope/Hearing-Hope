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
          source: '/services/hearing-test-in-delhi',
          destination: '/services/hearing-test-services-in-delhi',
          permanent: true, // This sets the status code to 301 (permanent redirect)
        },
      ]
    },
  };
  