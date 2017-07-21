angular.module('App').controller('homeController', function($scope, $stateParams, service) {

    let getTodo = function() {
       $scope.list = service.todo($stateParams.userId).then(function(response){
                $scope.list = response;
            });
    };


    getTodo();
}); 