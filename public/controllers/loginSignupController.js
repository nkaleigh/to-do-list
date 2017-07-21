angular.module('App').controller('loginSignupController', function($scope, service) {
    $scope.login = function(loginInfo) {
        service.login(loginInfo);
    };
    $scope.signup = function(signupInfo) {
        service.signup(signupInfo);
    };
});