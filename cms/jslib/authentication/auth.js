var auth = angular.module('auth',[
    'globalvar',
    'authservice'
]);

auth.controller('logincontroller',function($scope,$http,$window,AuthService,API_ENDPOINT){
    $scope.home = function(){
        alert(API_ENDPOINT.url);
    };
});