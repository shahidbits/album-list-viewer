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
        name: "diagnal",
        uri: "mongodb://127.0.0.1:27017/diagnal"

        /* MongoLabs
         name: "diagnal",
         uri: "mongodb://amex:welcome*123@ds053130.mongolab.com:53130/diagnal"
         */

    },
    cors: [
        "http://localhost:4000",
        "http://ec2-54-234-174-96.compute-1.amazonaws.com:4000"
    ],
    logFile: 'test',
    recLimit: 20
};

module.exports = config;

/***********************************  END  ***********************************/