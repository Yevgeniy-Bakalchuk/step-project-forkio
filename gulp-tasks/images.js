const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync");

const images = (cb) => {
  src("./src/images/*.+(png|jpg|gif|svg)")
    .pipe(
      imagemin({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true,
      })
    )
    .pipe(dest("./dist/images"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  cb();
};

exports.images = images;
