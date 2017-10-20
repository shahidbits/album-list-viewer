/******************************************************************************
 *
 *  mongoDbInit.js - Init db with sample data
 *
 * user_id    DD/MM/YYYY    Note
 * mohashah   12/10/2016    Created
 *
 *****************************************************************************/

module.exports.load = load;

var Album = require('../models/album.js');

//////////////////////

function load(callback) {

    // Remove all existing question
    console.log('Clearing database');

    Album.remove({}, function (err) {
        if (err) {
            console.log('Error in removing Album');
            return
        }
        initialize();
    });

    // Initialize with sample questions
    function initialize() {

        console.log('Init\'ing database');

        var albums = require('./sampleData').albums;
        var bulk = Album.collection.initializeUnorderedBulkOp();
        var count = albums.length;
        for (var i = 0; i < count; i++) {
            bulk.insert(albums[i]);
        }
        bulk.execute(function (err) {
            if (err) {
                callback(err);
                return;
            }
            console.log('Initialized database with ' + count + ' albums');
            callback();
        });
    }
}


/***********************************  END  ***********************************/