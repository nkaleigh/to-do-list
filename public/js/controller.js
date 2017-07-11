angular.module('App').controller('controller', function($scope, service){
    $scope.test = function(cool){
        service.test(cool).then(function(response) {
            $scope.cat = response;
        })
    }
    $scope.test2 = function(dog) {
        service.test2(dog).then(function(response) {
            $scope.res = response;
        })
    }
})