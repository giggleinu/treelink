const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	resolve: {
		// Help babel look for .ts and .tsx files to transpile
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.(ico|png|jpg|gif|svg)$/i,
				loader: 'file-loader',
				options: {
					outputPath: 'images',
					name: '[name].[ext]',
				},
			},
			{
				test: /\.ttf$/i,
				loader: 'file-loader',
				options: { outputPath: 'fonts', name: '[name].[ext]' },
			},
		],
	},
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new TsconfigPathsPlugin(),
	],
};
