const { watch, series } = require("gulp");
const { style } = require("./style.js");
const { scripts } = require("./script.js");
const { images } = require("./images.js");
const { browserSync } = require("./serv.js");

const watchTask = () => {
  watch("./*.html").on("change", browserSync.reload);

  watch("./src/styles/*.scss").on("change", series(style, browserSync.reload));
  watch("./src/scripts/*.js").on("change", series(scripts, browserSync.reload));
  watch("./src/images/*.+(png|jpg|gif|svg", images);
};

exports.watch = watchTask;
