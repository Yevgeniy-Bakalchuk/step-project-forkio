const browserSync = require("browser-sync").create();

const serv = (cb) => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    //  browser: "chrome",
    open: true,
  });
  cb();
};

exports.serv = serv;
exports.browsersync = browserSync;
