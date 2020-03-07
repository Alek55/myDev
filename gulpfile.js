const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

function css() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(rename('bundle.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./src/css'))
}

function watchCss() {
    return gulp.watch('./scss/**/*.scss', css);
}

exports.css = css;
exports.watchCss = watchCss;