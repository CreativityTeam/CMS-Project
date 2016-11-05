var mainroute = angular.module("mainroute",[]);

mainroute.config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: 'dashboard.html'
        })
        .state('user',{
            url: '/user',
            controller : 'usercontroller',
            templateUrl: 'user.html'
        })
        .state('table',{
            url: '/table',
            templateUrl: 'table.html'
        })
        .state('typography',{
            url: '/typography',
            templateUrl: 'typography.html'
        })
        .state('icons',{
            url: '/icons',
            templateUrl: 'icons.html'
        })
        .state('notifications',{
            url: '/notifications',
            templateUrl: 'notifications.html'
        });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
        });
    $locationProvider.hashPrefix('!');
});

mainroute.run(function($rootScope,$state,AuthService,$window){
    $rootScope.$on('$stateChangeStart',function(event,next,nextParams,fromState){
        if(!AuthService.isAuthenticated()){
            if(next.name != 'login' && next.name != 'register'){
                event.preventDefault();
                $window.location.href = '/login.html';
            };
        }
    });
});

