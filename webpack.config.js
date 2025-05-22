const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js', '.tsx'],
    },
    devtool: 'source-map',
    devServer: {
        static:{
            directory: path.resolve(__dirname, 'dist'),
        },
        // watchFiles:['src/**/*'],
        compress: true,
        liveReload: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(scss)$/,
                use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                            postcssOptions: {
                                plugins: () => [
                                require('autoprefixer')
                                ]
                            }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
            }

        ],
}
}