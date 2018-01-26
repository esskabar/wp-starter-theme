const autoprefixer = require('autoprefixer');
const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    watch: NODE_ENV == 'development',

    entry: './src/js/entry.es6',

    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },


    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new ExtractTextPlugin("style.css")
    ],

    module: {

        rules: [
            {
                test: /\.es6$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },

            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers: ['last 4 version']
                                    })
                                ]
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },

            {
                test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
                loader: 'url-loader?limit=100000'
            }

        ]
    },

    devtool: NODE_ENV == 'development' ? "source-map" : false,

    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    }


};