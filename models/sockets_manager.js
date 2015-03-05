var SensorManager = require('./sensor_manager.js');
var temperatureSensor = require('./temperature_sensor.js');
var socketsManagerClass = {
    liveSensorsMonitoring: function (io, data) {
        console.log(data);
        
        io.sockets.emit('connection', function (socket) {
            socket.emit('news', {
                hello: 'world',
                b:temperatureSensor.randomTempData()
            });
            socket.on('my other event', function (data) {
                //  console.log(data);
            });

        });
    },
    mockSensorMonitoring:function (io, data) {
        console.log(data);
        
        io.sockets.on('connection', function (socket) {
            socket.emit('news', {
                hello: 'world',
                b:52
            });
            socket.on('my other event', function (data) {
                  console.log(data);
            });

        });
    }
    

}

module.exports = socketsManagerClass;