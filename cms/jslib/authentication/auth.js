var auth = angular.module('auth',[
    'globalvar',
    'authservice',
    'toaster',
    'ngAnimate'
]);

auth.controller('logincontroller',function($scope,$http,$window,AuthService,API_ENDPOINT,toaster){
    $scope.login = function(){
        AuthService.login($scope.user).then(function(msg){
            $window.location.href = "/";   
        },function(errMsg){
            toaster.pop('error',"Login Exception",errMsg)
        });
    };
    $scope.register = function(){
        AuthService.register($scope.newUser).then(function(msg){
            $window.location.href = "/";   
        },function(errMsg){
            console.log(errMsg);
        });
    };
});