angular.module('App').controller('homeController', function($scope, $stateParams, service) {

    let getTodo = function() {
       $scope.list = service.todo($stateParams.userId).then(function(response){
            $scope.list = response.data;
        });
    };

    $scope.firstName = $stateParams.firstNameParam.firstname;

    $scope.addTask = function(newtask) {
        console.log('controller:newtask', newtask);
        newtask.id = $stateParams.userId;
        service.addTask(newtask);
    };

    getTodo();
}); 