angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('packages', {
                url: '/packages',
                templateUrl: '../views/packages.html',
                controller: 'packagesCtrl'
            })
            .state('locations', {
                url: '/locations',
                templateUrl: '../views/locations.html',
                controller: 'locationsCtrl'     
            })
            .state('booked', {
                url: '/booked/:id',
                templateUrl: '../views/booked.html',
                controller: 'bookedCtrl'
            })
            .state('home.adventurers', {
                url: '/adventurers/',
                templateUrl: '../views/about-adventurers'
            })
            .state('home.contact', {
                url: '/contact',              
                templateUrl: '../views/contact'
            })

        $urlRouterProvider
            .otherwise('/');
    });
