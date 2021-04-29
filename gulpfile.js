const { series, parallel } = require("gulp");
const { style } = require("./gulp-tasks/style.js");
const { serv } = require("./gulp-tasks/serv.js");
const { scripts } = require("./gulp-tasks/script.js");
const { images } = require("./gulp-tasks/images.js");
const { watch } = require("./gulp-tasks/watch");
const { cleanDist } = require("./gulp-tasks/clean");

const build = () => {
    return series(cleanDist,style, scripts, images)
}
const dev = (cb) => {
    return parallel(serv, watch)
    (cb);
}

exports.default = parallel(dev, build);

// exports.default = cleanDist;