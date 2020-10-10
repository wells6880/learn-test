const path = require('path');
const paths = require('./paths');
const plugins = require('./plugins');
const modules = require('./modules');
const optimization = require('./optimization');
const proxy = require('./proxy');
const {
    reactEntry,
    jsEntry,
    textJs,
    isEnvProduction
} = require('./variable');

console.log(process.env.NODE_ENV);
console.log(process.env.NODE_ENV === textJs ? jsEntry : reactEntry);

module.exports = {
    mode: isEnvProduction ? 'production' : 'development',
    entry: process.env.NODE_ENV === textJs ? jsEntry : reactEntry,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: !isEnvProduction ? 'js/[name].js' : 'js/[name].[hash].js',
        libraryTarget: 'umd'
    },
    plugins,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: paths
    },
    devtool: isEnvProduction ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
    // devtool: 'source-map',
    // devtool: false,
    module: modules,
    // 打包优化
    // optimization,
    devServer: {
        port: 9000,
        // historyApiFallback: {
        //     rewrites: { from: /.*/, to: '/index.html' }
        // },
        historyApiFallback: true,
        hot: true,
        open: true,
        host: '0.0.0.0',
        proxy
    }
    // performance: {
    //     hints: false
    // }
};
