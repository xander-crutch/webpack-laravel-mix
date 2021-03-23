const mix = require('laravel-mix');

mix.setPublicPath('public')
	.setResourceRoot('../') // Turns assets paths in css relative to css file
	.sass('src/sass/app.scss', 'css/app.css')
	.js('src/app.js', 'js/app.js').vue()
	.extract([
		'jquery',
	])
	.webpackConfig({

	})
	.sourceMaps();
	mix.options({
		terser: {
		  extractComments: false,
		}
	  });

if (mix.inProduction()) {
	mix.version();
} else {
	// Uses inline source-maps on development
	mix.webpackConfig({
		devtool: 'inline-source-map'
	});
	mix.browserSync('127.0.0.1:8100');
}
