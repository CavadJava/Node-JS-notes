/**
* Created by Javad on 2017/1/4.
*/

var net = require('net');  

var HOST = '127.0.0.1';  

var PORT = 7001;

// Create a TCP server instance, call the listen function to start listening on the specified port
// The callback function passed into net.createServer () will act as the handler for the "connection" event
// In each "connection" event, the socket object received by the callback function is unique
net.createServer(function(sock) {

    // Obtain a socket connection, the client to output
    console.log('CONNECTED: ' +
        sock.remoteAddress + ':' + sock.remotePort);

    // Add a "data" event handler for this socket instance
    sock.on('data', function(data) {
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // Back to the data, the client will receive data from the server to achieve ECHO server
        sock.write('' + data );
    });

    // Add a "close" event handler for this socket instance
    sock.on('close', function(data) {
        console.log('CLOSED: ' +
            sock.remoteAddress + ' ' + sock.remotePort);
    });

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);