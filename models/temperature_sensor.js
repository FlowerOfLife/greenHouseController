var five = require("johnny-five");
var temperatureSensorClass = {

    tmpDara: function (callback) {
        var sensor = new five.Sensor({
            pin: "A0",
            freq: 1000
        });
        //  var sensors = sensor
        sensor.on("data", function () {
            var celsius = ((this.value * 0.004882814) - 0.5) * 100;
            var myData = (((this.value * 5) / 1024) - 0.5) * 100;
            callback(celsius)
        });
    },
    randomTempData:function(){
    return Math.floor((Math.random() * 99) + 1);
    }

}

module.exports = temperatureSensorClass;