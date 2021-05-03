const { src, dest } = require("gulp");
const concat = require("gulp-concat");
const browserSync = require("browser-sync");

const html = (cb) => {
  src("./src/html/*.html")
    .pipe(concat("index.html"))
    .pipe(dest("./dist/html"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  cb();
};

exports.html = html;
