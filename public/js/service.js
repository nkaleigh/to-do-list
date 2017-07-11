angular.module('App').service('service', function($http) {
    // this.test = function(bee) {
    //     return $http.get(`/api/test/${bee}`)
    // }
    // this.test2 = function(apple) {
    //     return $http.delete(`/api/delete/${apple}`)
    // }
    this.login = function(loginInfo) {
        return $http.get('/api/login');
    };
    this.signup = function(signupInfo) {
        return $http.get('/api/signup');
    };
});