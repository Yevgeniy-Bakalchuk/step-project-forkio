const { src, dest } = require("gulp");
const imagemin = require('gulp-imagemin');

const images = () => {
   return src("./src/images/*.{png,jpg,jpeg,gif,svg}").pipe(
      dest("./dist/images")
      .pipe(imagemin())
      .pipe(dest('./dist/images'))
   );

};

exports.images = images;
