const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const config = {
    entry:
        // './src/cringyIndex.js',
        './src/index.js',
    devtool: 'sourcemap',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        // }),
        new HtmlWebpackPlugin({
            template: require('html-webpack-template'), //path.resolve(__dirname, 'src/index.html'),
            inject: false,
            mobile: true,
            lang: 'en-US',
            title: 'cali',
            appMountId: 'react-hooks',
            links: ['https://fonts.googleapis.com/css?family=Roboto'],
            scripts: [
                // 'https://code.jquery.com/jquery-3.1.0.js',
                // 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.js',
            ],
        }),
        new DashboardPlugin(),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\\/]node_modules[\\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    // expose jquery $ for imports s
    // externals: {
    //     jquery: 'jquery',
    //     moment: 'moment',
    // },
}

module.exports = config
