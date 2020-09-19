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
    },

    productionSourceMap: false,
    devServer:{
        port: 3087,
        hot: true,
        open: 'Google Chrome',
        // devtool: "source-map",

    },
};
