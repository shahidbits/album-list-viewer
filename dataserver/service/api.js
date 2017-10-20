/******************************************************************************
 *
 *  api.js - Data retrieval service
 *
 * user_id    DD/MM/YYYY    Note
 * mohashah   12/10/2016    Created
 *
 *****************************************************************************/

var mongoose = require('mongoose');
var moment = require('moment');

var Album = require('../models/album.js');
var RECORD_LIMIT = require('../config').recLimit

module.exports = {
    getPageByNumber: getPageByNumber
};


////////////////////


/* NOT IMPLEMENTED ROUTES */
function notImplemented(req, res, next) {
    next(new Error(
        'Data service method for ' + req.method + ' ' + req.url + ' is not implemented'
    ));
}


/* GET /api//page/:pageNum */
function getPageByNumber(req, res, next) {

    var pageNum = req.params.pageNum || 0

    var query = {};
    var projection = {
        _id: 0
    };
    var paginate = {
        sort: {
//            _id: -1
        },
        skip: pageNum * RECORD_LIMIT,
        limit: RECORD_LIMIT
    };

    Album.find(query, projection, paginate, function (err, data) {
        if (err) {

            res.status(500).json({
                message: 'error_query'
            });

        } else {

            Album.count({}, function (err, c) {

                if (err) {

                    res.status(500).json({
                        message: 'error_query'
                    });

                } else {

                    var page = {};
                    page['title'] = "Romantic Comedy";
                    page['total-content-items'] = c + "";
                    page['page-num-requested'] = pageNum + "";
                    page['page-size-requested'] = RECORD_LIMIT + "";
                    page['page-size-returned'] = data.length + "";

                    var contentItems = {}
                    contentItems.content = data

                    page['content-items'] = contentItems




                    res.status(200).json({
                        page: page || {}
                    });
                }

            });
        }
    });
}

/***********************************  END  ***********************************/