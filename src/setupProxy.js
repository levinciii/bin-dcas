const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(bin) {
  bin.use(
    '/bin/',
    createProxyMiddleware({
      target: 'http://localhost:2609',
      changeOrigin: true,
    })
  );
};
