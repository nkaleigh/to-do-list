angular.module('App').directive('mainDirective', function() {
    return {
        restrict: 'E',
        templateUrl: '../views/mainDirective.html',
        scope: {
            todo: '=',
            addTaskFunc: '&',
        }
    }
});