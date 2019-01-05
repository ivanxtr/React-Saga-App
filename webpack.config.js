const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
	devtool: "cheap-module-eval-source-map",
	entry: [
		"@babel/polyfill",
		"./app/app.jsx",
		"./app/sass/style.sass"
	],
	output: {
		path: path.join(__dirname, "public"),
		filename: "main.min.js",
		publicPath: "./public"
	},
	resolve: {
		extensions: [".jsx", ".js", ".json"]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				},
				include: path.join(__dirname, "app")
			},
			{
				test: /\.sass$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use:[
						{
							loader: "css-loader"
						},
						{
							loader: "sass-loader",
							options: {
								sourceMap: true
							}
						},
					],
				}),
			},
			{
				test: /\.css/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use:[{
						loader: "css-loader"
					}]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "css/styles.min.css",
			allChunks: true,
		}),
		new BrowserSyncPlugin({
			host: "localhost",
			port: 3000,
			server: { baseDir: ["public"]}
		})
	]
};