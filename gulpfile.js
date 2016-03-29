var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', function(done) {
    gulp.src('src/set-timezone.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .on('end', done);
});

