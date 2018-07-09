let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

publicDir = 'public_html';

mix.js('src/js/app.js', publicDir + '/assets/js')
    .sass('src/scss/app.scss', publicDir + '/assets/css')
    .options({
        processCssUrls: false,
    })
    .extract([
        'babel-polyfill',
        'jquery',
        'vue',
        'vue-carousel-3d',
        'lodash',
        'slick-carousel'
    ])
    .version();

if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: 'source-map'
    })
        .sourceMaps()
}

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery']
});

mix.browserSync({
    proxy: {
        target: "https://mossebo-ico.test"
    },
    https: true,
    open: false
});


mix.setResourceRoot(path.normalize(publicDir));
mix.setPublicPath(path.normalize(publicDir));
