angular.module('App').service('service', function($http, $state) {
    this.login = function(loginInfo) {
        return $http ({
            method: 'POST',
            url: '/api/login/',
            data: loginInfo
        }).then(function(response) {
            $state.go('home', { userId: response.data.id, firstNameParam: response.data });
        });
    };
    this.signup = function(signupInfo) {
        return $http ({
            method: 'POST',
            url: '/api/signup/',
            data: signupInfo
        }).then(function(response) {
            $state.go('home', { userId: response.data.id, firstNameParam: response.data });
        });
    };
    // this.todo = function(id) {
    //     console.log('this.todo', id);
    //     return $http ({
    //         method: 'GET',
    //         url: '/api/gettodo/',
    //         params: {idForUser: id},
    //         paramSerializer: '$httpParamSerializerJQLike'
    //     }).then(function(response) {
    //         return response;
    //     });
    // };
        this.todo = function(id) {
            return $http.get('/api/gettodo/' + id).then(function(response) {
                return response;
            });
        };
        this.addTask = function(newTask) {
            return $http.post('/api/addtask/', newTask).then(function(response) {
                $state.reload();
            });
        };
        this.deleteTask = function(task) {
            return $http.delete('/api/deleteTask/' + task).then(function(response) {
                console.log('task deleted!');
                $state.reload();
            })
        }
});