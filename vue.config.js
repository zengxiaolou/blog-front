const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
    configureWebpack: {
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
            }
        }
    },
    // devtool: "source-map",
    productionSourceMap: false,
    devServer:{
        port: 8037,
        hot: true,
        open: 'Google Chrome'
    },
};
