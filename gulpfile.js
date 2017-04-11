var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('browserify', function () {
  browserify('./src/js/main.js')
    .transform('reactify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('copy', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('src/css/*.*')
    .pipe(gulp.dest('dist/css'));
  gulp.src('src/js/vendors/*.*')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('minify', function() {
  gulp.src('dist/js/main.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['browserify', 'copy', 'minify'], function () {
  return gulp.watch('src/**/*.*', ['browserify', 'copy', 'minify']);
});