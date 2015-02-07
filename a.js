var SerialPort = require("serialport").SerialPort;


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


var serialPort = new SerialPort("/dev/ttyUSB0", {
    baudrate: 38400,
    parser: readline("\n\r")
}, false);


serialPort.open(function (error) {
    console.log('Serial Port Opend');


    serialPort.on('data', function (data) {
        console.log("ph: " + data);
    });

    serialPort.write('R\r')
});