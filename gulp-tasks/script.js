const { src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const minifyJs = require("gulp-js-minify"); /* а зачем если есть uglify? */
const concat = require("gulp-concat");
const browserSync = require("browser-sync");

const scripts = (cb) => {
  src("./src/scripts/*.js")
    .pipe(concat("scripts.min.js"))
    .pipe(uglify())
    .pipe(minifyJs())
    .pipe(dest("./dist/js"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  cb();
};

exports.scripts = scripts;
