module.exports = {
	options: {
		map: true,
		verbose: true,
		processors: [
			require('autoprefixer')({ browsers: ['last 2 versions'] }),
		]
	},
	dist: { src: '<%= config.dist.root %>css/app.css' }
};
