var express = require('express');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index')//(io);
var users = require('./routes/users');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
//new one
//var index_routes = require('./routes/')(io);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
/*var io = require('socket.io')(app);*/
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

/* app.listen(3000, function () {
console.log("express has started on port 3000");
});*/

//****************************************************************************************************************************8
/*//get data
var SerialPort = require("serialport").SerialPort;

//serial parcer function
function readline(delimiter, encoding) {
    if (typeof delimiter === "undefined" || delimiter === null) {
        delimiter = "\r";
    }
    if (typeof encoding === "undefined" || encoding === null) {
        encoding = "utf8";
    }
    // Delimiter buffer saved in closure
    var data = "";
    return function (emitter, buffer) {
        // Collect data
        data += buffer.toString(encoding);
        // Split collected data by delimiter
        var parts = data.split(delimiter);
        data = parts.pop();
        parts.forEach(function (part) {
            emitter.emit('data', part);
        });
    };
}


var serialPort = new SerialPort("/dev/ttyUSB2", {
    baudrate: 38400,
    parser: readline("\n")
}, false);



serialPort.open(function (error) {
    if (error) {
        console.log(error)
    }
    console.log('Serial Port Opend');





});*/
//mysql
var mysqlClass = require('./models/mysql_model.js')
    //sockets
var debug = require('debug')('generated-express-app');
//var app = require('../app');

app.set('port', process.env.PORT || 90);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});


var io = require('socket.io').listen(server);
var socketManager = require('./models/sockets_manager.js');
var sensorManager = require('./models/sensor_manager.js');

for(var i =0;i<10000;i++){
    (function(i){
    setTimeout(function(){
        //console.log('f')
        socketManager.liveSensorsMonitoring(io, 'xxxxxx')
    },100*i)
})(i)
}


sensorManager.startMonitorMock(io, 'xxxxxx')


module.exports = app;