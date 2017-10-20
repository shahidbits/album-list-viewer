/******************************************************************************
 *
 *  dataService.js - Data Service
 *
 * user_id    DD/MM/YYYY    Note
 * mohashah   12/10/2016    Created
 *
 *****************************************************************************/

'use strict';

var apiRootUrl = DATA_SERVER + '/api//page';

var diagnalTestApp = angular.module('diagnalTestApp');

diagnalTestApp
    .factory('Data', function($resource) {

        return $resource(
            apiRootUrl,
            { pageNum: '@pageNum'},
            {
                getPage: {
                    method: 'GET',
                    url: apiRootUrl + '/:pageNum'
                }
            }
        );
    });

/***********************************  END  ***********************************/