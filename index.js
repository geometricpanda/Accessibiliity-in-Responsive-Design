const liveServer = require("live-server");

const params = {
    root: "./src",
    open: false,
    file: "index.html",
    wait: 100,
    logLevel: 1,
};

liveServer.start(params);
