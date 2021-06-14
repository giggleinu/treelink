const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	resolve: {
		// Help babel look for .ts and .tsx files to transpile
		extensions: ['.ts', '.tsx', '.js', '.json'],
		alias: {
			['@components']: path.resolve(__dirname, 'src/components/*'),
			['@assets']: path.resolve(__dirname, 'src/assets/*'),
			['@types']: path.resolve(__dirname, 'typings/types.index.ts'),
			['@enums']: path.resolve(__dirname, 'typings/enums.index.ts'),
		},
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
	],
};
