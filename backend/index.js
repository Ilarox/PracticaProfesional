// Require packages and set the port
const express = require('express');
const port = 3002;
const app = express();


// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});


app.get('/crear-usuario', (request, response) => {
    // Website you wish to allow to connect
    request.header('Access-Control-Allow-Origin', 'http://localhost:8888');
    // Request methods you wish to allow
    request.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    //request.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //request.header('Access-Control-Allow-Credentials', true);

    console.log("llegue aca");
    var json = JSON.stringify({ 
        'success': true, 
        'id': 666, 
        'error': false
    });
    response.send(json);

});



app.get('/login', (request, response) => {
    
    //aca esta la logica del login

    response.send('Hello, Server!');
});


