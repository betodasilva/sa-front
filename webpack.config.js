const htmlPlugin = require("html-webpack-plugin"),
	  cssPlugin = require("mini-css-extract-plugin");


module.exports = {
    module: {
		rules: [
			{
				test: /\.html$/,
				use: [{ loader: "html-loader", options: { minimize: true} }]
			},
			{
				test: /\.(png|jpe?g)/i,
				use: [
					{
						loader: "url-loader",
						options: {
							name: "./img/[name].[ext]",
							limit: 50000
						}
					},
					{
						loader: "img-loader"
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					cssPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader"
				]
			}
		]
    },
    plugins: [
		new htmlPlugin({
			template: "src/index.html",
			filename: "./index.html"
		}),
		new cssPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
    ]

};
