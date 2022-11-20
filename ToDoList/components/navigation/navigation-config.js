
angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home/home.html',
                controller: 'homeController',
                controllerAs: 'homeCtrl'
            })

            .state('veryimp', {
                url: '/veryimp',
                templateUrl: 'templates/very-imp/very-imp.html',
                controller: 'veryController',
                controllerAs: 'veryCtrl'
            })

            .state('imp', {
                url: '/imp',
                templateUrl: 'templates/imp/imp.html',
                controller: 'impController',
                controllerAs: 'impCtrl'
            })

            .state('lessimp', {
                url: '/lessimp',
                templateUrl: 'templates/less-imp/less-imp.html',
                controller: 'lessController',
                controllerAs: 'lessCtrl'
            })

            .state('leastimp', {
                url: '/leastimp',
                templateUrl: 'templates/least-imp/least-imp.html',
                controller: 'leastController',
                controllerAs: 'leastCtrl'
            })

            $urlRouterProvider.otherwise('/home');
            $locationProvider.html5Mode(true);
    });
