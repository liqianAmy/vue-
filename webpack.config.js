var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: path.resolve(__dirname, './src/js/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.less', '.css', '.scss'],
        alias: {
            'vue$': 'vue/dist/vue.min.js',
            // 'src': path.resolve(__dirname, '../src'),
            // 'assets': path.resolve(__dirname, '../src/assets'),
            // 'components': path.resolve(__dirname, '../src/components')
        }
    },
    babel: {
        presets: ['es2015']
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        inline: true,
        port: 8084,
        host: 'localhost',
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            hash: true
        })
    ]
};
