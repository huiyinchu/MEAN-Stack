
/**
 * Module dependencies.
 */

var express = require('express');

/*
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
*/

var app = express();

// all environments
/*app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
*/

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

var cars = [
    {make: 'Pagani', website: "www.pagani.com"},
    {make: 'McLaren', website: "www.mclaren.com"}
];

app.get('/', function(req, res){
    res.render('cars',{
	cars: cars,
	title: "Cool Cars",
	header: "some kickass cars"
    });
});


app.listen(3000);
