/******************************************************************************
 *
 *  dataController.js - Data Controller
 *
 * user_id  DD/MM/YYYY  Note
 * mohashah  12/10/2016 Created
 *
 *****************************************************************************/

'use strict';

var diagnalTestApp = angular.module('diagnalTestApp');

diagnalTestApp
    .controller('DataCtrl', ['$scope', '$location', '$timeout', 'Data',
        function ($scope, $location, $timeout, Data) {

            $scope.data = [];
            $scope.chunkedData = [];
            $scope.pageTitle = '';
            $scope.pageCount = 0;

            $scope.isLoadCompleted = false;
            $scope.isLoadingMore = false;


            $scope.loadMore = function() {

                if($scope.isLoadCompleted) return;
                if($scope.isLoadingMore) return;

                $scope.pageCount++;
                $scope.isLoadingMore = true;

                getPage($scope.pageCount, function (pageData, pageTitle, dataCount) {

                    var prevCount = $scope.data.length
                    if(dataCount > 0) {

                        $scope.data = $scope.data.concat(pageData);
                        $scope.chunkedData = $scope.chunkedData.concat(chunk(pageData, 3));
                        $scope.chunkedData = chunk($scope.data, 3);

                        for(var i=0; i<$scope.data.length; i++) {

                            testImage('images/' + $scope.data[i]['poster-image'], i, function(i, res) {
                                if(!res) {
                                    $scope.data[i]['poster-image'] = 'placeholder_for_missing_posters.png';
                                    $scope.$apply();
                                }
                            });

                            if($scope.data[i].name.length > 15) {
                                $scope.data[i].name = $scope.data[i].name.substring(0, 10) + '...';
                            }
                        }
                    } else {
                        $scope.isLoadCompleted = true;
                    }

                });
            }

            getPage($scope.pageCount, function (pageData, pageTitle, dataCount) {

                $scope.data = pageData;
                $scope.chunkedData = chunk(pageData, 3);
                $scope.pageTitle = pageTitle

                if(dataCount > 0) {
                    for(var i=0; i<$scope.data.length; i++) {

                        testImage('images/' + $scope.data[i]['poster-image'], i, function(i, res) {
                            if(!res) {
                                $scope.data[i]['poster-image'] = 'placeholder_for_missing_posters.png'
                                $scope.$apply()
                            }
                        });

                        if($scope.data[i].name.length > 15) {
                            $scope.data[i].name = $scope.data[i].name.substring(0, 10) + '...'
                        }
                    }
                } else {
                    $scope.isLoadingMore = true;
                }

            });

            function chunk(arr, size) {
                var newArr = [];
                for (var i=0; i<arr.length; i+=size) {
                    newArr.push(arr.slice(i, i+size));
                }
                return newArr;
            }

            function getPage(pageNum, callback) {

                var pageData = {};
                var pageTitle = '';
                var dataCount = 0;
                $scope.isLoadingMore = true;

                Data.getPage({pageNum: pageNum}).$promise.then(function (res) {

                    pageData = res.page['content-items'].content;
                    pageTitle = res.page.title;
                    dataCount = res.page['page-size-returned'];

                    if(dataCount > 0 && pageData && pageData.length>0) {
                        for(var i=0; i<pageData.length; i++) {

                            testImage('images/' + pageData[i]['poster-image'], i, function(i, res) {
                                if(!res) {
                                    pageData[i]['poster-image'] = 'placeholder_for_missing_posters.png'
                                }
                            });

                            if(pageData[i].name.length > 15) {
                                pageData[i].name = pageData[i].name.substring(0, 10) + '...'
                            }
                        }
                    }

                    callback(pageData, pageTitle, dataCount);
                    $scope.isLoadingMore = false;

                }, function (err) {
                    var message = getErrorVal(err);
                    console.log(message)
                    callback(pageData, pageTitle, dataCount);
                    $scope.isLoadingMore = false;
                });
            }
        }
    ]);


/***********************************  END  ***********************************/