var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");

gulp.task('sass', function () {
    gulp.src('src/hipster-grid-system.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'));
    gulp.src('src/hipster-grid-system.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('dist'));
});
