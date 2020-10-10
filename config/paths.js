const path = require('path');

module.exports = {
    '@component': path.resolve(process.cwd(), 'src/component'),
    '@store': path.resolve(process.cwd(), 'src/store'),
    '@common': path.resolve(process.cwd(), 'src/common'),
    '@assets': path.resolve(process.cwd(), 'src/assets'),
    '@assetsImg': path.resolve(process.cwd(), 'src/assets/img')
    // '@ant-design/icons/lib/dist$': path.resolve(process.cwd(), 'src/icons.ts')
};
