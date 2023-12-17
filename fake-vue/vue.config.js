const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})

module.exports = {
  lintOnSave: false,
  devServer:{
    port:8888,
    proxy:{
      "/api":{
        target:"http://localhost:8000",
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
}
