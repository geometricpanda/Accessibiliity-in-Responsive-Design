const liveServer = require("live-server");

const params = {
    root: "./src",
    open: false,
    wait: 100,
    logLevel: 1,
};

liveServer.start(params);
