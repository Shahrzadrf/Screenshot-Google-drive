'use strict';

angular.module('driveApp', [])
    .controller('driveController', function($scope,$http, $window,gapiAuthService, driveService) {

        //Auth

        $scope.checkingLogin=true;
        gapiAuthService.checkLogin().then(function(){
            $scope.loggedIn=true;
        },function(){
            $scope.loggedIn=false;
        }).finally(function(){
            $scope.checkingLogin=false;
        });

        $scope.login=function(){
            gapiAuthService.login().then(function(){
                $scope.loggedIn=true;
            },function(authResult){
                $scope.loggedIn = false;
                console.err(authResult);
            })
        };

        //Drive

        $scope.images=[];
        $scope.myData = {};
        $scope.loadDoc=function(){
            //document.getElementById('uploadImage').click();
            console.log('scope is ');
            $http.get('https://api.screenshotmachine.com?key=a8f185&url=ifunded.de/en&dimension=1920x1080',null, { headers: {  'Accept' : '*/*' , 'Accept-Encoding' : 'gzip, deflate, br' , 'Connection' : 'keep-alive' }
            }).success(function (data, status, headers, config) {
                var result = JSON.parse(data.d);
                $scope.myData.fromServer = result;
            }).error(function (data, status, headers, config) {
            });
            console.log('scope is ' + scope);

        };


        $scope.clickFileUpload=function(){
            document.getElementById('uploadImage').click();
        };

        $scope.upload=function(){
            $scope.uploading=true;
            var allFiles=document.getElementById('uploadImage').files;
            var file=allFiles;
           
            var config = { responseType: 'blob' };

            $http.get('https://api.screenshotmachine.com?key=a8f185&url=ifunded.de/en&dimension=1920x1080',config, { headers: {  'Accept' : '*/*' , 'Accept-Encoding' : 'gzip, deflate, br' , 'Connection' : 'keep-alive' }
                }).success(function (response, status, headers, config) {
                    var result = response;
                    //var result = JSON.parse(response.data);
                    //var contentType = response.headers("content-type");
                    //var fileURL = URL.createObjectURL(result);
                    //window.open(fileURL); 
                    $scope.myData.fromServer = result;
                    driveService.insertFile(result, '1_ifunded.jpg').then(function(link){
                        $scope.images.push(link);
                    }).finally(function(){
                        $scope.uploading=false;
                    });                    
                }).error(function (data, status, headers, config) {
                });
                
            $http.get('https://api.screenshotmachine.com?key=a8f185&url=https://www.propertypartner.co&dimension=1920x1080',config, { headers: {  'Accept' : '*/*' , 'Accept-Encoding' : 'gzip, deflate, br' , 'Connection' : 'keep-alive' }
                }).success(function (response, status, headers, config) {
                    var result = response;
                    //var result = JSON.parse(response.data);
                    //var contentType = response.headers("content-type");
                    //var fileURL = URL.createObjectURL(result);
                    //window.open(fileURL); 
                    $scope.myData.fromServer = result;
                    driveService.insertFile(result, '2_Property.jpg').then(function(link){
                        $scope.images.push(link);
                    }).finally(function(){
                        $scope.uploading=false;
                    });                    
                }).error(function (data, status, headers, config) {
                });
            $http.get('https://api.screenshotmachine.com?key=a8f185&url=https://propertymoose.co.uk&dimension=1920x1080',config, { headers: {  'Accept' : '*/*' , 'Accept-Encoding' : 'gzip, deflate, br' , 'Connection' : 'keep-alive' }
                }).success(function (response, status, headers, config) {
                    var result = response;
                    //var result = JSON.parse(response.data);
                    //var contentType = response.headers("content-type");
                    //var fileURL = URL.createObjectURL(result);
                    //window.open(fileURL); 
                    $scope.myData.fromServer = result;
                    driveService.insertFile(result, '3_Property_Moose.jpg').then(function(link){
                        $scope.images.push(link);
                    }).finally(function(){
                        $scope.uploading=false;
                    });                    
                }).error(function (data, status, headers, config) {
                });

            $http.get('https://api.screenshotmachine.com?key=a8f185&url=https://www.homegrown.co.uk&dimension=1920x1080',config, { headers: {  'Accept' : '*/*' , 'Accept-Encoding' : 'gzip, deflate, br' , 'Connection' : 'keep-alive' }
                }).success(function (response, status, headers, config) {
                    var result = response;
                    //var result = JSON.parse(response.data);
                    //var contentType = response.headers("content-type");
                    //var fileURL = URL.createObjectURL(result);
                    //window.open(fileURL); 
                    $scope.myData.fromServer = result;
                    driveService.insertFile(result, '4_Homegrown.jpg').then(function(link){
                        $scope.images.push(link);
                    }).finally(function(){
                        $scope.uploading=false;
                    });                    
                }).error(function (data, status, headers, config) {
                });
            $http.get('https://api.screenshotmachine.com?key=a8f185&url=https://www.realtymogul.com&dimension=1920x1080',config, { headers: {  'Accept' : '*/*' , 'Accept-Encoding' : 'gzip, deflate, br' , 'Connection' : 'keep-alive' }
                }).success(function (response, status, headers, config) {
                    var result = response;
                    //var result = JSON.parse(response.data);
                    //var contentType = response.headers("content-type");
                    //var fileURL = URL.createObjectURL(result);
                    //window.open(fileURL); 
                    $scope.myData.fromServer = result;
                    driveService.insertFile(result, '5_Realty_Mogul.jpg').then(function(link){
                        $scope.images.push(link);
                    }).finally(function(){
                        $scope.uploading=false;
                    });                    
                }).error(function (data, status, headers, config) {
                });

        }

    });