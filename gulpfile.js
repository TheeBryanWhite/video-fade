var pkg = require('./package.json');
var gulp = require('gulp');

const BrowserSync = require('./gulp-tasks/browsersync');
const Sass = require('./gulp-tasks/sass');
const Scripts = require('./gulp-tasks/scripts');
const Img = require('./gulp-tasks/img-min');

gulp.task('browser-sync-init', BrowserSync.initialize);
gulp.task('js-watch', ['js'], BrowserSync.reload);
gulp.task('reload-watch', ['copy'], BrowserSync.reload);
gulp.task('sass', Sass.build);
gulp.task('lint', Scripts.lint);
gulp.task('js', ['lint'], Scripts.build);

gulp.task('copy', function(){
    gulp.src(`${pkg.config.src}/**/*.html`)
        .pipe(gulp.dest(pkg.config.dist));
});

gulp.task('imagemin', Img.imgmin);

gulp.task('watch', function () {
	gulp.watch(`${pkg.config.scss}/**/*.scss`, ['sass']);
	gulp.watch(`${pkg.config.scripts}/**/*.js`, ['js-watch']);
	gulp.watch(`${pkg.config.images}/**`, ['imagemin']);
	gulp.watch(`${pkg.config.src}/**/*.html`, ['reload-watch']);
});

gulp.task('default', ['sass', 'js', 'imagemin', 'copy', 'browser-sync-init', 'watch']);