const express = require('express');
const app = express();
const port = 3000;
var dbmethods = require('./public/dbmethods');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))
app.listen(port, () => console.log(`Miniapp checkout is running on port 127.0.0.1:${port}`));

app.post('/upload_user', function (req, res) {
    console.log(typeof (req.body));
    dbmethods.messages.postUser(req.body, function (data) {
        res.send(`${data}`);
    });
});

app.post('/upload_addr', function (req, res) {
    console.log((req.body));
    dbmethods.messages.postAddr(req.body, function (data) {
        res.send("Added user address");
    });
});

app.post('/upload_creditcard', function (req, res) {
    console.log((req.body));
    dbmethods.messages.postCC(req.body, function (data) {
        res.send("Added user cc");
    });
});
