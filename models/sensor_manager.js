var five = require("johnny-five");
var Promise = require('es6-promise').Promise;
//temp sensor
var temperatureSensor = require('./temperature_sensor.js');
var mysqlClass = require('./mysql_model.js')
var sensorManager = {
    getData: function (sensor, data) {

    },
    writeData: function (data) {
        var query = 'INSERT INTO `greenHouse`.`metadata` (`ph_arduino_raw`,`celsius`) VALUES (' + data.ph + ', "' + data.celtius + '")';
        console.log(query)
  /*      mysqlClass.mysqlQuery(query)
            .then(function (res) {
                // console.log(res)
            })*/
    },
    startMonitor: function () {
        var board = new five.Board;
        board.on("ready", function () {
            //diclare sensors data
            var dataPh = 7;
            var dataCeltius = ''
                //get tmp data
            temperatureSensor.tmpDara(function (celtius) {
                    console.log(celtius)
                    dataCeltius = celtius
                })
                //get ph data
            setTimeout(function () {
                dataPh = Math.floor((Math.random() * 3) + 10);
            }, 1000)

            //agregate ALL data
            setInterval(function () {
                console.log(dataCeltius);
                sensorManager.writeData({
                    ph: dataPh,
                    celtius: dataCeltius
                })
            }, 10000)
        });
    },
    aaa: 'ssss',
    startMonitorMock: function (io, data) {
        
        setInterval(function () {
        var data = {
                ph: temperatureSensor.randomTempData(),
                celtius: temperatureSensor.randomTempData() 
            }            
        io.sockets.on('connection', function (socket) {
            socket.emit('news', data);
            socket.on('my other event', function (data) {
                  console.log(data);
            });

        });
            //console.log(dataCeltius);
            sensorManager.writeData(data)
        },   10000)
    }
}



//sensorManager.startMonitorMock();
    




module.exports = sensorManager;


function showResult(result) {
    console.log(result)
}