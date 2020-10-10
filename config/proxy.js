module.exports = {
    // '/': {
    //     target: 'http://localhost:9000',
    //     secure: false,
    //     bypass(req, res, proxyOptions) {
    //         if (req.headers.accept.indexOf('html') !== -1) {
    //             console.log('Skipping proxy for browser request.');
    //             return '/index.html';
    //         }
    //     }
    // },
    '/api/*': {
        target: 'http://localhost:9001',
        secure: false
    }
};
