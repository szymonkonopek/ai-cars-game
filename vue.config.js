const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "",

  pluginOptions: {
    cordovaPath: "src-cordova",
  },
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
    },
  },
});
