const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.PORT || 8088;

app.get('/', function (req, res) {
    let info = {
        'name': 'Fathan Rohman',
        'location': 'Jakarta Selatan',
        'gender': 24
    }
    res.json(info);
});

app.listen(port, function () {
    console.log('Node.js listening on port' + port)
});
