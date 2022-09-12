const mix = require('laravel-mix');
require('mix-html-builder');
require('mix-tailwindcss');
require('laravel-mix-clean');
require('laravel-mix-clean-css');
const path = require('path');
const buildPath = "./build";
const srcPath = "./src";

mix.setPublicPath(buildPath)
	.setResourceRoot('../') // Turns assets paths in css relative to css file
	.sass(srcPath + '/sass/app.scss', 'css/app.css').tailwind()
	.js(srcPath + '/app.js', 'js/app.js').vue()
	.copyDirectory(srcPath + '/img', buildPath + '/img')
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
		htmlRoot: srcPath + '/index.html', // Your html root file(s)
		output: '', // The html output folder
		partialRoot: srcPath + '/partials',    // default partial path
		layoutRoot: srcPath + 'layouts',    // default partial path
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
	.options({
		terser: {
			extractComments: false,
		}
	})
	.browserSync({
		watch: true,
		server: buildPath,
		files: [
			buildPath + "/css/*.css",
			buildPath + "/js/*.js",
			buildPath + "/*.html"
		]
	})
	.cleanCss({
		level: 2,
		format: mix.inProduction() ? false : 'beautify' // Beautify only in dev mode
	});

if (mix.inProduction()) {
	mix.version();
} else {
	mix.sourceMaps();
	mix.webpackConfig({
		devtool: 'inline-source-map'
	})
}
