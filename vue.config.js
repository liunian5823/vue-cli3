
module.exports = {
  publicPath: process.env.VUE_APP_CURRENTMODE === 'production'? '/gerengonzuo/dist' : '/',
    chainWebpack: config => {
      config.plugin("define").tap(args => {
        args[0]["process.env"].VUE_APP_LOGOUT_URL = JSON.stringify(
          process.env.VUE_APP_LOGOUT_URL
        );
        console.log(args[0]);
        return args;
      });

    },
    // publicPath: ' ././'
    devServer: {
      open: false, // 是否自动弹出浏览器页面
      host: 'localhost',
      port: '8888',
      https: true,
      hotOnly: false,
      proxy: {
        '/api': {
          target: 'https://www.chuangxiangit.cn', // API服务器的地址
          ws: true, // 代理websockets
          changeOrigin: true, // 虚拟的站点需要更管origin
          pathRewrite: { // 重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
            '^/api': ''
          }
        }
      }
    },


}
