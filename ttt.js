var five = require("johnny-five");

five.Board().on("ready", function () {
    var sensor = new five.Sensor({
        pin: "A0",
        freq: 1000
    });

    sensor.on("data", function () {
        // TMP36
        var celsius = ((this.value * 0.004882814) - 0.5) * 100;
        var myData = (((this.value * 5) / 1024) - 0.5) * 100;
        //var fahrenheit = celsius * (9 / 5) + 32;
        console.log(celsius + "°C", myData + "°myData");
        //console.log(this.value + "°C");
        //    process.exit()
    });
});