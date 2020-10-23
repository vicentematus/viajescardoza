//Configuracion de Webpack
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:{
        home: './src/homepage/index.js',
        paquete: './src/paquete/paquete.js'
    },
    output: {
      path: path.resolve(__dirname, './build'),
      publicPath: '/',
      filename: '[name].js'  
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
                    MiniCSSExtractPlugin.loader,
                    "css-loader", "postcss-loader"
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
        new MiniCSSExtractPlugin({
            filename: 'styles.css',
            chunkFilename: 'styles.css'
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
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 5555
    }
}