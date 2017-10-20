/******************************************************************************
 *
 *  app.js - Main Application File defining the angular app
 *
 * user_id    DD/MM/YYYY    Note
 * mohashah   12/10/2016    Created
 *
 *****************************************************************************/

'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
var albumApp = angular
    .module('albumApp', [
        'ngRoute',
        'ngResource',
        'ngSanitize',
        'infinite-scroll'
    ]);

albumApp
    .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

    }

    ])
    .run(function($window) {

    });

/***********************************  END  ***********************************/