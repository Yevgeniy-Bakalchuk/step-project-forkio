const { src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync");
const minifyJs = require('gulp-js-minify');
const concat = require('gulp-concat');

const scripts = () => {
   return src("./src/scripts/*.js")
      .pipe(uglify())
      .pipe(dest("./dist/js"))
      .pipe(minifyJs())
      .pipe(dest('./dist/'))
       .pipe(concat('all.js'))
       .pipe(dest('./dist/'))
      .pipe(browserSync.stream());
};

exports.scripts = scripts;
