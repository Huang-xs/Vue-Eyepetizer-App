// 解决本地文件跨域问题[要在main.js中将axios与vue-axios引入]
// 1.引入本地的json数据
var indexData = require("./selected.json");

var itemlist = indexData;

// 2.将需要修改的webpack配置通过module.exports公开出去
module.exports = {
    // 3.在服务器开始创建时声明本地服务
    devServer: {
        // before(app) {
        //     app.get("/data/itemlist", function(req, res) {
        //         res.json({ data: itemlist })
        //     })
        // },
        proxy: {
            "/api": {
                target: "http://baobab.kaiyanapp.com",
                changeOrigin: true,
                // 路径重写之前请求 "/dmzj/recommend.json" => http://v2.api.dmzj.com/dmzj/recommend.json
                // pathRewrite: { // 路径重写
                //     '^/api': '', // rewrite path
                //     // 路径重写之后 /api 被替换成了空字符 请求 "/dmzj/recommend.json" => http://v2.api.dmzj.com/recommend.json
                // }
            }

        }

    }


}