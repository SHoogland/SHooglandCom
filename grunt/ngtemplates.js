module.exports = {
	dev: {
		options: {
			append: true,
			module: 'shooglandcom'
		},
		cwd: '<%= config.src.app %>',
		src: [
			'**/*.html',
			'!*.html'
		],
		dest: '<%= config.dist.root %>shooglandcom.js'
	},
	dist: {
		options: {
			append: true,
			module: 'shooglandcom',
			htmlmin: {
				removeComments: true,
				collapseWhitespace: true,
				collapseBooleanAttributes: true
			}
		},
		cwd: '<%= config.src.app %>',
		src: [
			'**/*.html',
			'!*.html'
		],
		dest: '<%= config.dist.root %>shooglandcom.js'
	}
};
