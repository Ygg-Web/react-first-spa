const HTMLPlugin = require('html-webpack-plugin')


module.exports = {
    entry: ['@babel/polyfill', './#src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: __dirname + '/dist',
        },
        port: 4500
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './#src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }], 
        // loaders: [
        //     {
        //         test: /\.css$/,
        //         loader: 'style!css'
        //     }
        // ]
    }

}