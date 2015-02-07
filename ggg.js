var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function () {
    // Assuming a sensor is attached to pin "A1"
    this.pinMode(1, five.Pin.ANALOG);
    this.analogRead(1, function (voltage) {
        console.log(voltage);
    });
});