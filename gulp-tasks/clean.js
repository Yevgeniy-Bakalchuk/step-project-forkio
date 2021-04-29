const { src, dest } = require("gulp");
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');

const cleanDist = () =>{
    return src('./dist/**', {read: false})
        .pipe(clean())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist'));
}

exports.cleanDist = cleanDist;