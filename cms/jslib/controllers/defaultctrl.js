var defaultctrl = angular.module('defaultctrl',[]);

defaultctrl.controller("DefaultController",function($scope,$http,AuthService,$window,API_ENDPOINT){

    var getinfo = function(){
        if(AuthService.isAuthenticated()){
                $http.get(API_ENDPOINT.url + '/api/users/findone/' + AuthService.tokensave()).success(function(response){
                $scope.name = response.data.local.name;
            });
        }
    };

    getinfo();

    $scope.logout = function(){
        AuthService.logout();
        $window.location.href = "/";
    };
});