'use strict';

const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: ["./src/js/app.js", "./src/styles/styles.less"],

    output: {
        filename: 'app.js',
        library: 'app'
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: "eval",

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[name].css"
        })
    ],

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js']
    },

    resolveLoader: {
        modules: ['node_modules'],
        moduleExtensions: ['-loader'],
        extensions: ['.js']
    },

    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {
                test: /\.less$/,
                use:  [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    grid: true//,
                                    //browsers:['ie >= 10', 'last 2 version']
                                })
                            ],
                            sourceMap: true
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },

    optimization: {
        minimize: false
    }
};
