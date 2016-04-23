var gulp = require('gulp'),
  sass = require('gulp-sass');

/**
 * Tasks to manage CSS files.
 */
gulp.task('sass', function() {
  return gulp.src([
    'app/styles/**/*.{scss,sass}'
  ])
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest('tmp/styles'));
});
