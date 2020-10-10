const {
    isEnvProduction
} = require('./variable');

module.exports = {
    minimize: isEnvProduction,
    // minimize: false,
    // minimize: true,
    splitChunks: {
        chunks: 'all'
        // minChunks: 2,
        // cacheGroups: {
        //     react: { // 键值可以自定义
        //         test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        //         name: 'react',
        //         reuseExistingChunk: true,
        //         enforce: true,
        //         priority: 10
        //     },
        //     redux: { // 键值可以自定义
        //         test: /[\\/]node_modules[\\/]redux/,
        //         name: 'redux',
        //         reuseExistingChunk: true,
        //         enforce: true,
        //         priority: 10
        //     },
        //     antd: { // 键值可以自定义
        //         test: /[\\/]node_modules[\\/]antd/,
        //         name: 'antd',
        //         reuseExistingChunk: true,
        //         enforce: true,
        //         priority: 10
        //     },
        //     // 导入的npm依赖，单独打成一个包
        //     vendors: {
        //         test: /[\\/]node_modules[\\/]/,
        //         name: 'vendors',
        //         reuseExistingChunk: true,
        //         enforce: true,
        //         // minChunks: 1,
        //         // maxInitialRequests: 5,
        //         // minSize: 0,
        //         // chunks: 'initial',
        //         priority: 1
        //     },
        //     commons: {
        //         name: 'commons',
        //         reuseExistingChunk: true, // 如果该chunk中引用了已经被抽取的chunk，直接引用该chunk，不会重复打包代码
        //         // 如果cacheGroup中没有设置minSize，则据此判断是否使用上层的minSize，true：则使用0，false：使用上层minSize
        //         enforce: true
        //     },
        //     default: {
        //         reuseExistingChunk: true,
        //         enforce: true
        //     }
        // }
    },
    runtimeChunk: {
        name: (entrypoint) => `runtime-${entrypoint.name}`
    }
};
