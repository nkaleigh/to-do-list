module.exports = {
        signup: function(req, res) {
            let username = req.body.username;
            let password = req.body.password;
            let firstname = req.body.firstname;
            req.app.get('db').checkExistingUsernames(username).then(function(username) {
                if(username[0] === undefined) {
                    req.app.get('db').addUser([req.body.username, req.body.password, req.body.firstname]).then(function(userinfo) {
                       req.app.get('db').login([req.body.username, req.body.password]).then(function(user) {
                           res.status(200).send(user[0]);
                       }).catch(function(err) {
                           res.status(500).send(err);
                       })
                    }).catch(function(err) {
                        res.status(500).send(err);
                    })
                } else {
                    res.status(400).send();
                }
            }).catch(function(err) {
                res.status(500).send(err);
            });
        },
        validateLogin: function(req, res) {
            let params = [
                req.body.username,
                req.body.password
            ];
            req.app.get('db').login(params).then(function(user) {
                if(!user[0]) {
                    res.status(400).send();
                } else {
                    res.status(200).send(user[0]);
                }
            }).catch(function(err) {
                res.status(500).send(err);
            });
        },
        getTodo: function(req, res) {
            let id = req.params.idForUser;
            req.app.get('db').getTodo(id).then(function(todo) {
                res.status(200).send(todo);
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
};

