angular.module('App').service('service', function($http) {
    this.login = function(loginInfo) {
        console.log('this.login', loginInfo);
        return $http ({
            method: 'POST',
            url: '/api/login/',
            data: loginInfo
        }).then(function(response){
            $state.go('home', { userid: 'response.data[0].id'});
        });
    };
    this.signup = function(signupInfo) {
        console.log('this.signup', signupInfo);
        return $http({
            method: 'POST',
            url: '/api/signup/',
            data: signupInfo
        }).then(function(response){
            return response;
        });
    };
});