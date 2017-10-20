/******************************************************************************
 *
 *  config.js - Configuration File - Data Server
 *
 * user_id    DD/MM/YYYY    Note
 * mohashah   12/10/2016    Created
 *
 *****************************************************************************/

var config = {
    server: {
        host: "http://localhost",
        port: 9000
    },
    db: {

        /* Local */
        name: "albumviewer",
        uri: "mongodb://127.0.0.1:27017/albumviewer"

    },
    cors: [
        "http://localhost:4000"
    ],
    logFile: 'test',
    recLimit: 20
};

module.exports = config;

/***********************************  END  ***********************************/