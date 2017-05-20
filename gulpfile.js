var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
//gulp.task('html', function () {
//  gulp.src('*.html')
//    .pipe(webserver.reload());
//});
//
//gulp.task('watch', function () {
//  gulp.watch(['*.html'], ['html']);
//});

gulp.task('default', ['browser-sync']);