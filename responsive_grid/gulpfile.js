const gulp = require('gulp');
const sass = require('gulp-sass');
const maps = require('gulp-sourcemaps');

gulp.task('sass:dev', () => {
  gulp.src(__dirname + '/4_grids/css/*.scss')
    .pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(__dirname + '/4_grids/'));
});
