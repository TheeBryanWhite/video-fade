const pkg = require('../package.json');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const imgmin = function() {
	gulp.task('default', () =>
    gulp.src(`${pkg.config.images}/**`)
        .pipe(imagemin())
        .pipe(gulp.dest(`${pkg.config.dist}/img/`))
	);
}

module.exports = { imgmin }