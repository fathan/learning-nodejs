const express = require('express');
const app = express();
const port = 3600;

app.get('/', function (request, response) {
    response.send('Hello World!');
});

app.listen(port, function () {
    console.log('Server listening on http://localhost:' + port);
});
