
var socketsManagerClass = {
    liveSensorsMonitoring: function (io, data) {
        console.log(data);
        
        io.sockets.on('connection', function (socket) {
            socket.emit('news', {
                hello: 'world'
            });
            socket.on('my other event', function (data) {
                //  console.log(data);
            });

        });
    }

}

module.exports = socketsManagerClass;