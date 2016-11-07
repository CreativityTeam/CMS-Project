var userctrl = angular.module("userctrl",[]);

userctrl.controller("usercontroller",function($scope,$http,AuthService,API_ENDPOINT){

    $scope.map = "map.html";
     var getinfo = function(){
        if(AuthService.isAuthenticated()){
                $http.get(API_ENDPOINT.url + '/api/users/findone/' + AuthService.tokensave()).success(function(response){
                if(response.success){
                    $scope.user = response.data;
                }
            });
        }
    };

    getinfo();
});