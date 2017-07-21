const express = require('express'), 
    bodyParser = require('body-parser'), 
    massive = require('massive');
const session = require('express-session');
const cors = require('cors');
const config = require('./config');

const app = module.exports = express(), 
    port = 3000;

app.use(bodyParser.json());
app.use(cors());


app.use(express.static('public'));


massive({connectionString: config.elephantsql}).then(function(db) {
    app.set('db', db);
});

const controller = require('./serverCtrl');


app.post('/api/signup/', controller.signup);
app.post('/api/login/', controller.validateLogin);
app.get('/api/gettodo/:idForUser', controller.getTodo);



app.listen(port, function(){
    console.log("Listening on port " + port);
});