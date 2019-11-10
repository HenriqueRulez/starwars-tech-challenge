const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function compilaSassDev() {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

function compilaSassProd() {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    )
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

function gulpJs() {
  return gulp
    .src('js/modules/*.js')
    .pipe(concat('main.js'))
    .pipe(
      babel({
        presets: ['env']
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}

function browser() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
}

function watch() {
  gulp.watch('scss/**/*.scss', compilaSassDev);
  gulp.watch(['js/**/*.js', '!js/main.js'], gulpJs);
  gulp.watch(['*.html', '*.js']).on('change', browserSync.reload);
}

gulp.task('sassDev', compilaSassDev);
gulp.task('sassProd', compilaSassProd);
gulp.task('mainJs', gulpJs);
gulp.task('watch', watch);
gulp.task('browser-sync', browser);
gulp.task(
  'default',
  gulp.parallel('watch', 'browser-sync', 'sassDev', 'mainJs')
);
