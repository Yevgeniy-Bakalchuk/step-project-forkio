const { watch, series } = require("gulp");
const { html } = require("./html.js");
const { style } = require("./style.js");
const { scripts } = require("./script.js");
const { images } = require("./images.js");
const { browserSync } = require("./serv.js");

const watchTask = () => {
  watch("./src/html/*.html").on("change", series(html, browserSync.reload));

  watch("./src/styles/*.scss").on("change", series(style, browserSync.reload));
  watch("./src/scripts/*.js").on("change", series(scripts, browserSync.reload));
  watch("./src/images/*", images);
};

exports.watch = watchTask;
