var pkg = require('../package.json');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

const imgmin = function() {
	gulp.task('default', () =>
    gulp.src(`${pkg.config.images}/**`)
        .pipe(imagemin())
        .pipe(gulp.dest(`${pkg.config.dist}/img/`))
	);
}

module.exports = { imgmin }