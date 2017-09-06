var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/main.css'))
});

//gulp watch
gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', ['sass'])
});

gulp.task('default', ['sass', 'watch'], function(){
    
});