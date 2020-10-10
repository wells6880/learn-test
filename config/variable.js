const path = require('path');

module.exports = {
    cssRegex: /\.css$/,
    cssModuleRegex: /\.module\.css$/,
    lessRegex: /\.less$/,
    lessModuleRegex: /\.module\.less$/,
    // reactEntry: './src/index.tsx',
    // jsEntry: './es6/app.js',
    reactEntry: path.resolve(__dirname, '../src/index'),
    jsEntry: path.resolve(__dirname, '../es6/app'),
    textJs: 'testjs',
    isEnvProduction: process.env.NODE_ENV === 'production',
    shouldUseSourceMap: process.env.GENERATE_SOURCEMAP !== 'false',
    getLocalIdentName: '[local]_[hash:base64:5]',
    appSrc: path.resolve(process.cwd(), 'src')
};
