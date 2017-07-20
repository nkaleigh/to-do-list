angular.module('App').service('service', function($http, $state) {
    this.login = function(loginInfo) {
        return $http ({
            method: 'POST',
            url: '/api/login/',
            data: loginInfo
        }).then(function(response) {
            console.log('loginresponse', response.data.id);
            $state.go('home', { userId: response.data.id});
        });
    };
    this.signup = function(signupInfo) {
        return $http ({
            method: 'POST',
            url: '/api/signup/',
            data: signupInfo
        }).then(function(response) {
            return response;
        });
    };
    this.todo = function(id) {
        console.log('this.todo', id);
        return $http ({
            method: 'GET',
            url: '/api/gettodo/:id',
            params: { id : id}
        }).then(function(response) {
            return response;
        });
    };
});