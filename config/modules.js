const {
    cssRegex,
    cssModuleRegex,
    lessRegex,
    lessModuleRegex,
    isEnvProduction,
    shouldUseSourceMap,
    getLocalIdentName,
    appSrc
} = require('./variable');
const { getStyleLoaders } = require('./utils');

module.exports = {
    rules: [
        // js配置
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            // include: appSrc,
            use: [{
                loader: 'babel-loader'
            }]
        },
        // jsx配置
        {
            test: /\.jsx$/,
            exclude: /(node_modules)/,
            // include: appSrc,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/react']
                }
            }]
        },
        // ts配置
        {
            test: /\.ts$/,
            exclude: /(node_modules)/,
            include: appSrc,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-typescript'],
                    plugins: [
                        ['@babel/plugin-transform-typescript', {
                            allowNamespaces: true
                        }]
                    ]
                }
            }]
        },
        // tsx配置
        {
            test: /\.tsx$/,
            exclude: /(node_modules)/,
            include: appSrc,
            use: [{
                loader: 'babel-loader',
                options: {
                    // @babel/preset-typescript @babel/plugin-transform-typescript支持typeScript
                    presets: ['@babel/preset-typescript', '@babel/react'],
                    plugins: [
                        ['@babel/plugin-transform-typescript', {
                            allowNamespaces: true
                        }]
                    ]
                }
            }]
        },
        // 样式配置
        {
            test: cssRegex,
            exclude: cssModuleRegex,
            // include: appSrc,
            use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvProduction && shouldUseSourceMap
            }),
            sideEffects: true
        },
        {
            test: cssModuleRegex,
            // include: appSrc,
            use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvProduction && shouldUseSourceMap,
                modules: true,
                localIdentName: getLocalIdentName
            }, null, true)
        },
        {
            test: lessRegex,
            exclude: lessModuleRegex,
            // include: appSrc,
            use: getStyleLoaders({
                importLoaders: 2,
                sourceMap: isEnvProduction && shouldUseSourceMap
            },
            'less-loader'),
            sideEffects: true
        },
        {
            test: lessModuleRegex,
            // include: appSrc,
            use: getStyleLoaders({
                importLoaders: 2,
                sourceMap: isEnvProduction && shouldUseSourceMap,
                modules: true,
                localIdentName: getLocalIdentName
            },
            'less-loader', true)
        },
        // {
        //     test: /\.(le|sa|sc|c)ss$/,
        //     use: [
        //         !isEnvProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
        //         // MiniCssExtractPlugin.loader,
        //         'css-loader',
        //         'less-loader',
        //         // 'sass-loader'
        //         'postcss-loader'
        //     ]
        // },
        // 图片的配置
        {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    esModule: false,
                    limit: 8192,
                    name: 'resource/[name].[ext]'
                }
            }]
        },
        // 字体图标的配置
        {
            test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    esModule: false,
                    limit: 8192,
                    name: 'resource/[name].[ext]'
                }
            }]
        }
    ]
};
