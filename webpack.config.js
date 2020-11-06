const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env = {}) => {
    const { mode = 'development' } = env;

    const isProd = mode == 'production';
    const isDev = mode == 'development';

    const getPlugins = () => {
        const plugins = [
            new HtmlPlugin({
                template: './public/index.html',
                buildTime: isProd ? undefined : new Date().toISOString(),
                filename: 'index.html',
            }),
        ];

        if (isProd) {
            plugins.push(
                new CleanWebpackPlugin(),
                new MiniCssExtractPlugin({
                    filename: 'css/main-[chunkhash].css',
                })
            );
        }

        return plugins;
    };

    const getStyleLoader = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
        ];
    };

    return {
        mode: isProd ? 'production' : isDev && 'development',

        entry: './src/js/index.js',
        output: {
            filename: isProd ? 'js/main-[chunkhash].js' : 'js/bundle.js',
            path: path.resolve(__dirname, './build'),
        },

        devServer: {
            contentBase: path.resolve(__dirname, './build'),
            compress: true,
            // host: '192.168.0.101',
            port: 9000,
        },

        plugins: getPlugins(),

        optimization: {
            minimizer: [
                new TerserJSPlugin({}),
                new OptimizeCSSAssetsPlugin({
                    cssProcessor: require('cssnano'),
                    cssProcessorPluginOptions: {
                        preset: [
                            'default',
                            { discardComments: { removeAll: true } },
                        ],
                    },
                }),
            ],
        },

        devtool: isProd ? false : 'source-map',
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.css$/i,
                    use: getStyleLoader(),
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [...getStyleLoader(), 'postcss-loader', 'sass-loader'],
                },
                {
                    test: /\.(png|jpg|jpeg|webp|gif|ico)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name]-[sha1:hash:7].[ext]',
                            },
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2|ttf|otf|eof)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]',
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
    };
};
