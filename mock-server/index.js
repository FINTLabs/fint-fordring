
const express = require('express');
const app = express();

let user = require('./data/user.json');
let recipients = require('./data/recipients.json');

app.get('/api/user', (req, res) =>
    res.send(user)
);

app.get('/api/recipient', (req, res) =>
    res.send(recipients)
);

app.listen(3200, () => console.log('Example app listening on port 3200!'));