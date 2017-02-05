/**
* Created by Administrator on 2015/9/8.
*/

var net = require('net');  
var readline = require('readline');

// Create the Readline interface
rl = readline.createInterface(process.stdin, process.stdout);

var HOST = '127.0.0.1';  
var PORT = 7001;

var client = new net.Socket();  
client.connect(PORT, HOST, function() {  
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // After the connection is established, the command line input is executed
    rl.setPrompt('Test> ');
    rl.prompt();
});

// Add a "data" event handler for the client
// Data is the data sent back by the server
client.on('data', function(data) {  
   // Output server-side message
   console.log(""+data);
   rl.prompt();
});

// Add a "close" event handler for the client
client.on('close', function() {  
    console.log('Connection closed');
    process.exit(0);
});

rl.on('line', function(line) {  
    switch(line.trim()) {
        case 'close':
            rl.close();
            return;
    }
    client.write(line.trim());
    rl.prompt();
}).on('close', function() {
    console.log('Good bye!');
    client.end();
});