//Configuracion de Webpack
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSS = require('mini-css-extract-plugin');

module.exports = {
    entry:{
        home: './src/homepage/index.js',
        paquete: './src/paquete/paquete.js',
        calendario: './src/calendario/calendario.js'
    },
    resolve:{
        extensions:['.mjs', '.js']
    },

    module:{
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSS.loader,
                    'css-loader',
                    "postcss-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.html$/i,
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    plugins:[
        new MiniCSS({
            filename: 'style.css'
        }),
        new HTMLWebpackPlugin({
            chunks: ['home'],
            template: "./src/homepage/boilerplate.html",
            filename: './index.html'
        }),
        new HTMLWebpackPlugin({
            template: "./src/paquete/paquete.html",
            chunks: ['paquete'],
            filename: './paquete.html'
        }),
        new HTMLWebpackPlugin({
            template: "./src/Calendario/calendario.html",
            chunks: ['calendario'],
            filename: './calendario.html'
        })
    ],

    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: '/',
        filename: '[name].bundle.js'  
      },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 5555
    }
}