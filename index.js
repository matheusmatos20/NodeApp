var http = require('http');
var express = require('express');
var port =  process.env.PORT || 8080;
var app = express();
var appRoutes = require('./src/routes/appRoutes');
var bodyParser = require('body-parser');
 var cors = require('cors');

 app.use(cors({enableOrigin:"*"}))
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.json());
 app.use('/',appRoutes);

http.createServer(app).listen(port);
console.log("Backend is running",port);