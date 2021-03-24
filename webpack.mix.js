const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');
require('mix-html-builder');
require('mix-tailwindcss');
const path = require('path')

mix.setPublicPath('./public')
	.setResourceRoot('../') // Turns assets paths in css relative to css file
	.sass(path.join(__dirname, 'src') + '/sass/app.scss', 'css/app.css').tailwind()
	.js('./src/app.js', 'js/app.js')
	.vue()
	.extract([
		'jquery',
		'alpinejs'
	])
	// if use jQuery
	.autoload({
		jquery: ['$', 'window.jQuery', "jQuery", "window.$", "jquery", "window.jquery"]
	})
	// disable if not use html
	.html({
		htmlRoot: path.join(__dirname, 'src') + '/index.html', // Your html root file(s)
		output: '', // The html output folder
		partialRoot: path.join(__dirname, 'src') + '/partials',    // default partial path
		layoutRoot: path.join(__dirname, 'src') + 'layouts',    // default partial path
		inject: true,
		minify: {
			removeComments: true
		}
	})
	.webpackConfig({
		output: {
			publicPath: '.'
		}
	})
	.sourceMaps()
	.options({
		terser: {
			extractComments: false,
		}
	});

if (mix.inProduction()) {
	mix.version();
} else {
	mix.browserSync('http://localhost:63342/webpack-laravel-mix/public/');
	mix.webpackConfig({
		plugins: [
			new LiveReloadPlugin()
		],
	});
}
