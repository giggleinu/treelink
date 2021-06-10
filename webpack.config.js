const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  mode: 'development',
    entry: './src/index.tsx',
    resolve: {
        // Help babel look for .ts and .tsx files to transpile
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            ['@components']: path.resolve(__dirname, 'src/components'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(ico|png|jpg|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    name: '[name].[ext]',
                },
            },
        ]
    },
    output: {
        path: path.join(__dirname,'/build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]}