const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const path = require("path");
const resolve = dir => path.join(__dirname, dir);


module.exports = {
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set("vue$", "vue/dist/vue.esm.js")
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("css", resolve("src/assets/css"))
            .set("components", resolve("src/components"))
            .set("views", resolve("src/views"))
            .set("api", resolve("src/api"))
            .set("mixins", resolve("src/mixins"))
            .set("store", resolve("src/store"))
            .set("service", resolve("src/service"))
            .set("filters", resolve("src/filters"))
            .set("utils", resolve("src/utils"))
    },
    configureWebpack: config => {
        const plugins = [];
            plugins.push(
                new CompressionWebpackPlugin({
                    filename: "[path][name].gz[query]",
                    algorithm: "gzip",
                    test: productionGzipExtensions,
                    threshold: 10240,
                    minRatio: 0.8
                })
            );
        config.plugins = [...config.plugins, ...plugins];
        config.performance = {
            // false | "error" | "warning" //不显示性能提示 ｜ 以错误的方式提示 ｜ 以警告的形式提示
            hints: "warning",
            // 开发环境设置较大防止警告
            // 根据入口起点的最大体积，控制webpack何时生成性能提示，整数类型，以字节为单位
            maxEntrypointSize: 5000000,
            // 最大单个资源体积，默认250000（bytes）
            maxAssetSize: 30000000
        }
        config.externals = {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'element-ui': 'ELEMENT',
            'echarts': 'echarts',
            // 'codemirror': 'codemirror',
            'vuex': 'Vuex',
            // 'axios':'axios',

        }
        config.devtool = "source-map"
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
            cdn: {
                css: [
                    '//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css'
                ],
                js: [
                    "//unpkg.com/vue@2.6.11/dist/vue.min.js",
                    "//unpkg.com/vue-router@3.0.3/dist/vue-router.min.js",
                    "//unpkg.com/vuex@3.1.2/dist/vuex.min.js",
                    "//unpkg.com/element-ui@2.13.2/lib/index.js",
                    "//cdnjs.cloudflare.com/ajax/libs/echarts/4.3.0/echarts.min.js",
                ]
            },
        }
    },
    productionSourceMap: false,
    devServer:{
        port: 3087,
        hot: true,
        open: 'Google Chrome',
        // devtool: "source-map",

    },
};
