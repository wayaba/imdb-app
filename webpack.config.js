const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.[fullhash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" })
    ],
    resolve: {
        modules: [__dirname, "node_modules", "src"],
        extensions: [".js", ".jsx"]
    },
    module:{
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader")
            }
        ]
    }
}