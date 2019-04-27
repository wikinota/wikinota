var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    context: __dirname,
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.worker\.ts$/,
                use: { loader: 'worker-loader' }
            },
        ]
    },
    resolve: {
        modules: ['node_modules', path.resolve(__dirname, "src")],
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: "index.html",
            template: 'src/index.html'
        })
    ]
};
//# sourceMappingURL=webpack.config.js.map