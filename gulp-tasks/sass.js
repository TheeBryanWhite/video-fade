const pkg = require('../package.json');
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const mqpacker = require('css-mqpacker');
const uniqueSelectors = require('postcss-unique-selectors');

const streamToBrowserSync = require('./browsersync').stream;

const sassOptions = {
    errLogToConsole: true,
    includePaths: [
        './node_modules/susy/sass',
        `${pkg.config.src}/**/*.scss`
    ]
};

const autoprefixerOptions = {
    expand: true,
    flatten: true,
    browsers: ['last 2 versions']
};

const pxToRemOptions = {
    propWhiteList: [
        'font',
        'font-size',
        'line-height',
        'letter-spacing',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left'
    ]
};

const mqpackerOptions = {
    sort: true
};

const build = function(){
    return gulp.src(`${pkg.config.src}/sass/**/*.scss`)
      .pipe(sass(sassOptions).on('error', function(err){
            console.error(err.message);
            this.emit('end');
        }))
      .pipe(postcss([
          autoprefixer(autoprefixerOptions),
          pxtorem(pxToRemOptions),
          mqpacker(mqpackerOptions),
          uniqueSelectors()
      ]))
      .pipe(gulp.dest(`${pkg.config.dist}/css/`))
      .pipe(streamToBrowserSync());
}

module.exports = { build }
