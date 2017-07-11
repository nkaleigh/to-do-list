angular.module('App', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    
    // $urlRouterProvider.when('', '/login');
    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'homeController'
    })
    .state('login', {
        url: '/login',
        templateUrl: './views/loginSignup.html',
        controller: 'loginSignupController'
    });
});
