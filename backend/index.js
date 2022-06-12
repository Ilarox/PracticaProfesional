// Require packages and set the port
const express = require('express');
const port = 3002;
const app = express();

app.get('/create-saraza', (request, response) => {
    //console.log(`URL: ${request.url}`);
    response.send('Hello, Server!');
});


// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});


app.post('/crear-usuario', (request, response) => {
    //aca va la logica de registro de usuario
    var json = JSON.stringify({ 
        'success': true, 
        'id': 666, 
        'error': false
    });
    response.send(json);
});