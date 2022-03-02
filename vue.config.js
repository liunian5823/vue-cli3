module.exports = {
  publicPath:
    process.env.VUE_APP_CURRENTMODE === "production"
      ? "/gerengonzuo/dist"
      : "/",
  configureWebpack: {
    devtool: "source-map"
  },
  chainWebpack: config => {
    config.plugin("define").tap(args => {
      args[0]["process.env"].VUE_APP_LOGOUT_URL = JSON.stringify(
        process.env.VUE_APP_LOGOUT_URL
      );
      console.log(args[0]);
      return args;
    });
  },

  lintOnSave: false,

  devServer: {
    overlay: {
      warning: false,
      errors: false
    },
    open: false, // 是否自动弹出浏览器页面
    host: "localhost", //设置成0.0.0.0可局域网访问
    port: "8888", //设置的端口号
    https: false, //是不是开启https
    hotOnly: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1", // 代理服务器的地址
        ws: true, // 代理websockets
        changeOrigin: true, // 虚拟的站点需要更管origin
        pathRewrite: {
          // 重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          "^/api": ""
        }
      }
    }
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: []
    }
  }
};
