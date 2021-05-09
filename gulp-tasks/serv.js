const browserSync = require("browser-sync").create();

const serv = (cb) => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    open: true,
    // browser: "chrome",
  });
  cb();
};

exports.serv = serv;
exports.browserSync = browserSync;
