const { series, parallel } = require("gulp");

const { style } = require("./gulp-tasks/style.js");
const { serv } = require("./gulp-tasks/serv.js");
const { scripts } = require("./gulp-tasks/script.js");
const { images } = require("./gulp-tasks/images.js");
const { watch } = require("./gulp-tasks/watch.js");
const { cleanDist } = require("./gulp-tasks/clean.js");

const build = (cb) => {
  return series(cleanDist, style, scripts, images)(cb);
};
const dev = (cb) => {
  return parallel(serv, watch)(cb);
};

exports.default = parallel(dev, build);

// exports.default = cleanDist;

// exports.default = parallel(serv, series(style, scripts, images));
