const path = require('path');

module.exports = {

    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    // loaders
    module: {
        loaders: [{
            // ? makes it optional, $ means the end - any js file
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [
                    'env'
                ]
            }
        }]
    }
};  
