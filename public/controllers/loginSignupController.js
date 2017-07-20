angular.module('App').controller('loginSignupController', function($scope, service) {
    $scope.login = function(loginInfo) {
        console.log('loginInfo', loginInfo);
        service.login(loginInfo).then(function(response) {
        });
    };
    $scope.signup = function(signupInfo) {
        console.log('signupInfo', signupInfo);
        service.signup(signupInfo).then(function(response) {
            console.log('response from service', response);
            $scope.signupResponse = response.data[0];
        });
    };
});