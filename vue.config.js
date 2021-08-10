module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': './assets',
        'components': './components',
        'views': './views'
      }
    }
  }
  // publicPath: '/', // 部署应用包时的基本 URL，默认 '/'
  // devServer: {
  //   proxy: {// devServer.proxy 跨域配置 Type: string | Object
  //     '/api': {// 这会告诉开发服务器将"http://localhost:8080/.../api/..."请求 (没有匹配到静态文件的请求) 代理到"target"
  //       target: 'http://127.0.0.1:7001',
  //       changeOrigin: true, //
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
}
