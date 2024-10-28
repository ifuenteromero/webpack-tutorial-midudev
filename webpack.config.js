const path = require('path');

const ruleForCss = {
	test: /\.css$/i,
	use: [
		'style-loader', // inyecta el CSS en el HTML
		'css-loader', // interpreta los @import y url() de los archivos CSS
	],
};

const ruleForJS = {
	test: /\.js$/, // regex para buscar archivos .js
	loader: 'babel-loader', // transpila JS moderno a JS antiguo
	options: {
		presets: [
			[
				'@babel/preset-react', // transpila JSX a JS
				{
					runtime: 'automatic',
				},
			],
		],
	},
};

const rules = [ruleForJS, ruleForCss];

module.exports = {
	// entry: './src/index.js', // por defecto ya lo hace
	output: {
		filename: 'index.js', // bundle
		path: path.resolve(__dirname, 'build'), // __dirname te permite saber en qué ruta está este archivo webpack.config.js
	},
	module: {
		rules,
	},
};
