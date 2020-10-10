const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const {
    isEnvProduction
} = require('./variable');

const basePlugins = [
    // 设置html模板
    new HtmlWebpackPlugin({
        inject: true,
        template: './src/index.html',
        ...(isEnvProduction
            ? {
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true
                }
            }
            : undefined)
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ForkTsCheckerWebpackPlugin({
        // 将async设为false，可以阻止Webpack的emit以等待类型检查器/linter，并向Webpack的编译添加错误。
        async: false
    })
    // 将TypeScript类型检查错误以弹框提示
    // 如果fork-ts-checker-webpack-plugin的async为false时可以不用
    // 否则建议使用，以方便发现错误
    // new ForkTsCheckerNotifierWebpackPlugin({
    //     title: 'TypeScript',
    //     excludeWarnings: true,
    //     skipSuccessful: true
    // })
];

const devPlugins = [
    new webpack.HotModuleReplacementPlugin()
    // new BundleAnalyzerPlugin({
    //     analyzerPort: 9081
    // })
];

const proPlugins = [
    // 将css样式提取为单独的包，不再和js一起打包
    new MiniCssExtractPlugin({
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[id].[hash].css'
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin(
        [{
            from: path.resolve(process.cwd(), 'public'),
            to: path.resolve(process.cwd(), 'dist/public')
        }],
        { ignore: ['index.html'], copyUnmodified: true }
    )
];

module.exports = basePlugins.concat(isEnvProduction ? proPlugins : devPlugins);
