const path = require("path");
const args = require("yargs").argv;
const webpack = require("webpack");
const ZipPlugin = require("zip-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

module.exports = {
    entry: "./src/app.ts",
    target: "node",
    optimization: { minimize: false },
    stats: {
        errorDetails: true, //this does show errors
        colors: true,
        modules: true,
        reasons: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new DuplicatePackageCheckerPlugin(),
        new webpack.ProgressPlugin(),
        new ZipPlugin({
            path: path.resolve(args.context, "dist"),
            filename: 'app',
            extension: "zip",
            include: ['app.js'],
        })
    ],
    output: {
        filename: 'app.js',
        path: path.resolve(args.context, "dist"),
        libraryTarget: "umd"
    }
};