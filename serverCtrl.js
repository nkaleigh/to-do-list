// const app = require('./server');
// const db = app.get('db');

module.exports = {
        // getTest: function(req, res) {
        //     req.app.get('db').getTest(req.params.name).then(function(i) {
        //         res.send(i);
        //     }).catch(function(err) { 
        //         res.status(500).send(err);
        //     });
        // },
        // deleteName: function (req, res) {
        //     req.app.get('db').deleteThisName(req.params.name).then(function(response) {
        //         res.status(200).send('Deleted');
        //     }).catch(function(err) {
        //         res.status(500).send(err);
        //     });
        // },
        signup: function(req, res) {
            let username = req.body.username;
            let password = req.body.password;
            let firstname = req.body.firstname;
            req.app.post('db').checkExistingUsernames(username).then(function(username) {
                if(!username[0]) {
                    req.app.post('db').addUser([username, password, firstname]).then(function(userinfo){
                       req.app.get('db').login([username, password]).then(function(user){
                           res.send(user);
                       }).catch.status(500).send(err);
                    }).catch(function(err){
                        res.status(500).send(err);
                    });
                } else {
                    alert('Username already exisits. Please choose another username.');
                }
            }).catch(function(err) {
                res.status(500).send(err);
            });
        },
        login: function(req, res) {
            console.log('reached the serverCtrl');
            let params = [
                req.body.username,
                req.body.password
            ];
            req.app.get('db').login(params).then(function(user) {
                res.send('user');
            }).catch(function(err) {
                res.status(500).send(err);
            });
        }
        // addTodo: function(req, res) {
        //     let params = [
        //         req.body.userid,
        //         req.body.todoitem
        //     ];
        //     req.app.get('db').addTodo(params).then(function(todo) {
        //         res.send('item added');
        //     }).catch(function (err) {
        //         res.status(500).send(err);
        //     });
        // },
        // getUser: function (user) {
        //     req.app.get('db').getUser(req.body.userid).then(function(user) {
        //         res.send(user);
        //     }).catch(function(err) {
        //         res.status(500).send(err);
        //     });
        // },
        // getTodo: function(req, res) {
        //     req.add.get('db').getTodo(req.body.userid).then(function(todo) {
        //         res.send(todo);
        //     }).catch(function(err){
        //         res.status(500).send(err);
        //     });
        // },
        // deleteTodo: function(req, res) {
        //     let params = [
        //         req.body.userid,
        //         req.body.todoitem
        //     ];
        //     req.app.get('db').deleteTodo(params).then(function(deleted) {
        //         res.send('item deleted');
        //     }).catch(function(err){
        //         res.status(500).send(err);
        //     });
        // }
}

