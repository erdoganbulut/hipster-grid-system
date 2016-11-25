var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('sass', function () {
    gulp.src('src/hipster-grid-system.scss')
        .pipe(sass({
            // includePaths: require('node-bourbon').with('other/path', 'another/path')
            // - or -
            includePaths: require('node-bourbon').includePaths
        }))
        .pipe(gulp.dest('dist'));
});
