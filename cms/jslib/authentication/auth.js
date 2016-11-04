var auth = angular.module('auth',[
    'globalvar',
    'authservice',
    'toaster',
    'ngAnimate'
]);

auth.directive('loading',function(){
    return {
        restrict : "E",
        replace : true,
        template: '<div class="loading"><img src="/assets/img/loading.gif" width="20" height="20" /> Please Wait A Few Minutes...</div>',
        link : function(scope,element,attr){
            scope.$watch('loading',function(val){
                if(val){
                    $(element).show();
                }else{
                    $(element).hide();
                }
            });
        }
    }
});

auth.controller('logincontroller',function($scope,$http,$window,AuthService,API_ENDPOINT,toaster){
    var checkconnection = function(){
        $http.get(API_ENDPOINT.url + '/checkconnection').success(function(response){
            if (response.status == 200){
                $scope.isHide = true;   
            }else{
                $scope.isHide = false;   
            }
        });
    }
    checkconnection();
    $scope.login = function(){
        $scope.loading = true;
        AuthService.login($scope.user).then(function(msg){
            $window.location.href = "/";   
        },function(errMsg){
            $scope.loading = false;
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