const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const miniCss = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './web/src'),
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [ new CopyPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, './web/src/images'),
                to:   path.resolve(__dirname, 'dist/images')
            }
        ]
    }),
        new HTMLWebpackPlugin({
            template: "./views/index.html"
        }),
        new CleanWebpackPlugin(),
        new miniCss({
            filename: 'style.css',
        }),
    ],
    module: {
        rules: [
            {
            test:/\.(s*)css$/,
            use: [miniCss.loader, 'css-loader', 'sass-loader',]
        },
            {
                test: /\.(jpg|png|svg|jpeg|gif)$/,
                type: 'asset/resource'
            }
        ]
    }
}
