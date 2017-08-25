const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const PROXY = process.env.PROXY;

const base = function ({theme = {}}) {
	return {
		entry: [],

		output: {},

		resolve: {
			extensions: ['.webpack.js', '.web.js', '.js', '.ts', '.tsx']
		},

		plugins: [],

		module: {
			rules: [
				{
					test: /\.css$/,
					use: [
						'style-loader',
						'css-loader',
					]
				},
				{
					test: /\.less$/,
					use: [
						'style-loader',
						'css-loader',
						{
							loader: 'less-loader',
							options: {
								sourceMap: true,
								modifyVars: theme
							}
						}
					]
				},
				// Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
				// loads bootstrap's css.
				{
					test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 10000,
								minetype: 'application/font-woff'
							}
						}
					]
				},
				{
					test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 10000,
								minetype: 'application/font-woff'
							}
						}
					]
				},
				{
					test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 10000,
								minetype: 'application/octet-stream'
							}
						}
					]
				},
				{
					test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
					use: ['file-loader']
				},
				{
					test: /\.(png|jpg|jpeg|webp)$/i,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 10000,
							}
						}
					],
					exclude: /node_modules/
				}
			]
		},
	}
};

const dev = function ({dirname, config, theme, port = 8000, proxyPrefix = "/api"}) {
	return merge(base({theme}), {
		entry: [
			"react-hot-loader/patch",
			`webpack-dev-server/client?http://0.0.0.0:${port}`,
			"webpack/hot/only-dev-server",
		],
		output: {
			path: path.resolve(dirname, '__build__'),
			filename: '[name].js',
			publicPath: '/static/'
		},
		devtool: 'source-map',
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NamedModulesPlugin(),
		],
		module: {
			rules: []
		},
		devServer: {
			host: '0.0.0.0',
			hot: true,
			historyApiFallback: true,
			port: port,
			contentBase: path.resolve(dirname, '.'),
			stats: {
				colors: true,
				timings: true,
				chunks: false   // less verbose, disable chunk information output
			},
			proxy: {
				[proxyPrefix]: {
					target: PROXY,
					secure: false,
					bypass: function (req) {
						if (req.headers.accept && req.headers.accept.indexOf("html") !== -1) {
							console.log("Bypass the proxy - " + req.headers.accept);
							return "/index.html";
						}
					}
				},
				['/assets']: {
					target: PROXY,
					secure: false,
					bypass: function (req) {
						if (req.headers.accept && req.headers.accept.indexOf("html") !== -1) {
							console.log("Bypass the proxy - " + req.headers.accept);
							return "/index.html";
						}
					}
				}
			},
		}
	}, config);
};

const bundle = function ({dirname, config, theme, beta}) {
	return merge(base({theme}), {
		entry: [],
		output: {
			filename: beta ? '[name].js' : '[name].[chunkhash:8].js',
			sourceMapFilename: '[name].map'
		},
		devtool: 'source-map',
		plugins: [
			// new BundleAnalyzerPlugin()
		],
		module: {
			rules: []
		},
		externals: {
			'react': 'React',
			'react-dom': 'ReactDOM'
		}
	}, config);
};

const dev2 = function ({dirname, config, theme, port = 8000, proxyPrefix = "/api"}) {
	return merge(base({theme}), {
		entry: [
			"react-hot-loader/patch",
			`webpack-dev-server/client?http://0.0.0.0:${port}`,
			"webpack/hot/only-dev-server",
		],
		output: {
			path: path.resolve(dirname, '__build__'),
			filename: 'bundle.js',
			publicPath: '/static/'
		},
		devtool: 'source-map',
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NamedModulesPlugin(),
		],
		module: {
			rules: []
		},
		devServer: {
			host: '0.0.0.0',
			hot: true,
			historyApiFallback: true,
			port: port,
			contentBase: path.resolve(dirname, '.'),
			stats: {
				colors: true,
				timings: true,
				chunks: false   // less verbose, disable chunk information output
			},
			proxy: {
				[proxyPrefix]: {
					target: PROXY,
					secure: false,
					bypass: function (req) {
						if (req.headers.accept && req.headers.accept.indexOf("html") !== -1) {
							console.log("Bypass the proxy - " + req.headers.accept);
							return "/index.html";
						}
					}
				},
				['/assets']: {
					target: PROXY,
					secure: false,
					bypass: function (req) {
						if (req.headers.accept && req.headers.accept.indexOf("html") !== -1) {
							console.log("Bypass the proxy - " + req.headers.accept);
							return "/index.html";
						}
					}
				}
			},
		}
	}, config);
};

const bundle2 = function ({dirname, config, theme, beta}) {
	return merge(base({theme}), {
		entry: [],
		output: {
			filename: beta ? 'bundle.js' : 'bundle.js',
			sourceMapFilename: 'bundle.map'
		},
		devtool: 'source-map',
		plugins: [
			// new BundleAnalyzerPlugin()
		],
		module: {
			rules: []
		},
		externals: {
			'react': 'React',
			'react-dom': 'ReactDOM'
		}
	}, config);
};

module.exports = {
	dev, bundle, dev2, bundle2
};
