angular.module('App').controller('homeController', function($scope, $stateParams, $timeout, $state, service) {

    let getTodo = function() {
       $scope.list = service.todo($stateParams.userId).then(function(response){
            $scope.list = response.data;
        });
    };

    $scope.firstName = $stateParams.firstNameParam.firstname;

    $scope.addTask = function(newtask) {
        newtask.id = $stateParams.userId;
        service.addTask(newtask);
    };

    $scope.deleteTask = function(deletedtask) {
        let idd = deletedtask.id;
        service.deleteTask(idd);
    }


    getTodo();
}); 