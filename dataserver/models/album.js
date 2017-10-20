/******************************************************************************
 *
 *  album.js - Model for Album
 *
 * user_id    DD/MM/YYYY    Note
 * mohashah   12/10/2016    Created
 *
 *****************************************************************************/

var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var albumSchema;
albumSchema = mongoose.Schema({

    _id: ObjectId,
    name: String,
    poster_image: String,
    createdat: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Album', albumSchema);


/***********************************  END  ***********************************/