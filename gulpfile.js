var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('sass', function () {
    gulp.src('src/hipster-grid-system.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'));
});
