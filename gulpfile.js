var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});
gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Other watchers
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})
