const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssNormalize = require('postcss-normalize');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssPresetEnv = require('postcss-preset-env');
const {
    isEnvProduction,
    shouldUseSourceMap
} = require('./variable');

// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor, isTs) => {
    const loaders = [
        isEnvProduction ? {
            loader: MiniCssExtractPlugin.loader
            // options: { publicPath: '../../' }
        } : require.resolve('style-loader'),
        isTs && {
            loader: require.resolve('@teamsupercell/typings-for-css-modules-loader')
        },
        isTs && {
            // loader: require.resolve('css-loader'),
            loader: 'css-loader',
            options: {
                ...cssOptions,
                camelCase: true
            }
        },
        !isTs && {
            loader: require.resolve('css-loader'),
            options: cssOptions
        }
        // {
        //     loader: require.resolve('postcss-loader'),
        //     options: {
        //         ident: 'postcss',
        //         plugins: () => [
        //             postcssFlexbugsFixes,
        //             postcssPresetEnv({
        //                 autoprefixer: {
        //                     flexbox: 'no-2009'
        //                 },
        //                 stage: 3
        //             }),
        //             postcssNormalize()
        //         ],
        //         sourceMap: true
        //     }
        // }
    ].filter(Boolean);
    const antdThemeDir = path.join(__dirname, './antd.theme.less');
    let themeVariables = null;
    if (antdThemeDir) {
        themeVariables = {
            hack: `true; @import "${antdThemeDir}";`
        };
    }
    if (preProcessor) {
        loaders.push({
            loader: require.resolve('resolve-url-loader'), // less,sass在使用css module时，对url的解析存在冲突，可以用resolve-url-loader进行解决
            options: {
                sourceMap: isEnvProduction && shouldUseSourceMap
            }
        }, {
            loader: require.resolve(preProcessor),
            options: {
                sourceMap: true,
                modifyVars: themeVariables, // 加入antd主题
                javascriptEnabled: true
            }
        });
    }
    return loaders;
};

module.exports = {
    getStyleLoaders
};
