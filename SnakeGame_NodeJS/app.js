var express = require('express');
var app = express();
var port = 1337;

app.use(express.static('public'));
app.set('view engine', 'pug');

app.listen(port);
app.get('/', function (req, res) {
    res.render('index');
});

