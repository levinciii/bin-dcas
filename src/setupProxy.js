const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(bin) {
  bin.get(
    '/bin/patients/',
    createProxyMiddleware({
      target: 'http://localhost:2609',
      changeOrigin: true,
    })
  );
};
