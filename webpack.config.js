const path = require('path');

module.exports = {
	// entry: './src/index.js', // por defecto ya lo hace
	output: {
		path: path.resolve(__dirname, 'build'), // __dirname te permite saber en qué ruta está este archivo webpack.config.js
	},
};
