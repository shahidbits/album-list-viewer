/******************************************************************************
 *
 *  header.js - Header File
 *
 * user_id    DD/MM/YYYY    Note
 * mohashah   12/10/2016    Created
 *
 *****************************************************************************/

/* HTTP STATUS CODE */
var ERROR_400 = 'Invalid parameters';
var ERROR_401 = 'Unauthorized';
var ERROR_403 = 'Unexpected error. Please log in again';
var ERROR_404 = 'Not found. Try after sometime';
var ERROR_500 = 'Server Problem. Try after some time';
var ERROR_UNKNOWN = 'Unknown Problem. Try after some time';
var ERROR_DATA_NOT_FOUND = 'Requested data is not found';

function getErrorVal(err) {

    var message = '';
    if (err.status == 400) {
        message = ERROR_400;
    } else if (err.status == 401) {
        message = ERROR_401;
    } else if (err.status == 403) {
        message = ERROR_403;
    } else if (err.status == 404) {
        message = ERROR_404;
    } else if (err.status == 500) {
        message = ERROR_500;
    } else {
        message = ERROR_UNKNOWN;
    }

    return message;
}

function testImage(URL, i, callback) {
    var tester = new Image();
    tester.onload = function() {
        callback(i, true);
    };
    tester.onerror = function() {
        callback(i, false);
    };
    tester.src = URL;
}

/***********************************  END  ***********************************/