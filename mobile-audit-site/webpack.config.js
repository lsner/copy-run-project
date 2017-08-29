const {dev2} = require('../utilities/src/webpack');
const babelLoader = require('../utilities/src/webpack/babelLoader');
const path = require('path');

module.exports = dev2({
	dirname: __dirname,
	proxyPrefix: '/',
	config: {
		entry: [
			path.join(__dirname, './src/index.tsx'),
		],
		module: {
			rules: [
				{
					test: /\.ts ||.tsx$/,
					use: ['react-hot-loader/webpack',
						babelLoader,
						{
							loader: 'ts-loader',
							options: {transpileOnly: true},
						}],
					include: [
						path.resolve(__dirname, './src'),
						path.resolve(__dirname, '../utilities')
					]
				}
			]
		},
	}
});
