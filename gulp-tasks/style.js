const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

const style = () => {
   return src("./src/styles/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(dest("./dist/css"))
       .pipe(autoprefixer({
          cascade: false
       }))
       .pipe(dest('dist'))
       .pipe(concat('all.css'))
       .pipe(dest('./dist/'))
      .pipe(browserSync.stream());
};


exports.style = style;
