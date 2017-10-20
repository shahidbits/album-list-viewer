/******************************************************************************
 *
 *  api.js - Route definitions for the API
 *
 * user_id    DD/MM/YYYY    Note
 * mohashah   12/10/2016    Created
 *
 *****************************************************************************/

var express = require('express');
var router = express.Router();
var api = require('../service/api');

router.get('/page/:pageNum', api.getPageByNumber);

module.exports = router;

/***********************************  END  ***********************************/