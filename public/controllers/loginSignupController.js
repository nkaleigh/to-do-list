angular.module('App').controller('loginSignupController', function($scope, service) {
    $scope.login = function(loginInfo) {
        service.login(loginInfo).then(function(response) {
            $scope.loginResponse = response;
        });
    };
    $scope.signup = function(signupInfo) {
        service.signup(signupInfo).then(function(response) {
            $scope.signupResponse = response;
        });
    };
});