angular.module('App', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    
    // $urlRouterProvider.when('', '/login');
    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('home', {
        url: '/home/:userId',
        templateUrl: './views/home.html',
        controller: 'homeController',
        params: {firstNameParam: null, taskToDelete: null}
    })
    .state('login', {
        url: '/login',
        templateUrl: './views/loginSignup.html',
        controller: 'loginSignupController'
    });
});
