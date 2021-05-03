const { src, dest } = require("gulp");
const sass = require("gulp-sass");
// const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const browserSync = require("browser-sync");

// const style = () => {
//    return src("./src/styles/*.scss")
//       .pipe(sass().on("error", sass.logError))
//       .pipe(dest("./dist/css"))
//        .pipe(autoprefixer({
//           cascade: false
//        }))
//        .pipe(dest('dist'))
//        .pipe(concat('all.css'))
//        .pipe(dest('./dist/'))
//       .pipe(browserSync.stream());
// };
const style = (cb) => {
  src("./src/styles/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("styles.min.css"))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    //  .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("./dist/css"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  cb();
};

exports.style = style;
