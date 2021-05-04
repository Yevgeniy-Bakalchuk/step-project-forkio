const browserSync = require("browser-sync").create();

const serv = (cb) => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    // browser: "chrome",
  });
  cb();
};

exports.serv = serv;
exports.browserSync = browserSync;
