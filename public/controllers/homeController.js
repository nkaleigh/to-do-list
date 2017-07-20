angular.module('App').controller('homeController', function($scope, $stateParams, service) {

    let getTodo = function() {
        console.log('homeController getTodo envoked');
       $scope.list = service.todo($stateParams.userId).then(function(response){
           console.log('i made it to the', response)
                $scope.list = response;
            });
    };


    getTodo();
}); 