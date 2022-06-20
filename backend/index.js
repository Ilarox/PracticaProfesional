// Require packages and set the port
const express = require('express');
const port = 3002;
const app = express();

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});

app.post('/crear-usuario', (request, response) => {
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


