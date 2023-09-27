const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                exclude: /@babel(?:\/|\\{1,2})runtime/,
                test: /\.(js|mjs|jsx|ts|tsx|css)$/,
                loader: require.resolve('source-map-loader'),
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                loader: require.resolve('babel-loader'),
                options: {
                  customize: require.resolve(
                    'babel-preset-react-app/webpack-overrides'
                  ),
                  presets: [
                    [
                      require.resolve('babel-preset-react-app'),
                      {
                        runtime: 'classic',
                      },
                    ],
                  ],
                  cacheDirectory: true,
                  cacheCompression: false,
                  compact: false,
                },
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Common Components",
            filename: 'index.html',
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],
    devServer: {
        open: true,
    },
};