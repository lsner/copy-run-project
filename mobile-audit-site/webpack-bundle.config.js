const path = require('path');
const babelLoader = require('../utilities/src/webpack/babelLoader');
const {bundle2} = require('../utilities/src/webpack');

module.exports = bundle2({
	dirname: __dirname,
	config: {
		entry: [
			path.join(__dirname, './src/index.tsx'),
		],
		output: {
			path: path.resolve(__dirname, '../../../__out__/mobile-audit-site'),
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: [
						babelLoader,
						{
							loader: 'ts-loader',
							options: {
								transpileOnly: true,
								compilerOptions: {
									target: 'es5'
								}
							},
						}],
					include: [
						path.resolve(__dirname, './src'),
						path.resolve(__dirname, '../../node_modules')
					]
				},
			]
		}
	}
});
