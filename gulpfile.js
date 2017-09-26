var gulp = require('gulp');
var sass = require('gulp-sass');
var modernizr = require('gulp-modernizr');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function () {
  return gulp.src(['sass/**/*.scss','sass_components/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 5%'],
      cascade: false
    }))
    .pipe(gulp.dest('./assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(['sass/**/*.scss','sass_components/**/*.scss'], ['sass']);
});

gulp.task('modernizr', function() {
  gulp.src('./js/*.js')
    .pipe(modernizr({
      options: [
        "setClasses",
        "addTest",
        "html5printshiv",
        "testProp",
        "fnBind"
      ],
      // Add capabilities to test in here ...
      tests: [
        "backgroundblendmode"
      ]
    }))
    .pipe(gulp.dest("js/"))
});
