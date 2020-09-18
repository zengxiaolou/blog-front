const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
const productionGzipExtensions = ['html', 'js', 'css'];

module.exports = {
    configureWebpack:  {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('src'),
                'assets': resolve('src/assets'),
                'css':resolve('src/assets/css'),
                'images':resolve('src/assets/images'),
                'views': resolve('src/views'),
                'components':resolve('src/components'),
                'api':resolve('src/api'),
                'mixins':resolve('src/mixins'),
                'store': resolve('src/store'),
                'service':resolve('src/service'),
                'filters':resolve('src/filters'),
                'utils':resolve('src/utils'),
            }
        },
        plugins: [
            new CompressionPlugin({
                /* [file]被替换为原始资产文件名。
                   [path]替换为原始资产的路径。
                   [dir]替换为原始资产的目录。
                   [name]被替换为原始资产的文件名。
                   [ext]替换为原始资产的扩展名。
                   [query]被查询替换。*/
                filename: '[path].gz[query]',
                //压缩算法
                algorithm: 'gzip',
                //匹配文件
                test: new RegExp(
                    '\\.(' + productionGzipExtensions.join('|') + ')$'
                ),
                //压缩超过此大小的文件,以字节为单位
                threshold: 10240,
                minRatio: 0.8,
                //删除原始文件只保留压缩后的文件
                deleteOriginalAssets: false
            })
        ],
    },
    productionSourceMap: false,

    devServer:{
        port: 3087,
        hot: true,
        open: 'Google Chrome',
        // devtool: "source-map",

    },
};
