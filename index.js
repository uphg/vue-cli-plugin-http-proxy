const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (api, options) => {
  console.log('# options')
  console.log(options)
  const opts = options.pluginOptions
  console.log('# opts')
  console.log(opts)
  api.configureDevServer(app => {
    // app.use(
    //   createProxyMiddleware(opts)
    // );
    app.use((req, res, next) => {
      console.log('req')
      console.log(req)
      console.log('res')
      console.log(res)
      next()
    })
  })
}
