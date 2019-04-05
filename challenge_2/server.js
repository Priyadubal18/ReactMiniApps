const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('client'));

app.post('/upload_json', function (req, res) {

    res.send('Hello world');
});

app.listen(port, () => console.log(`Miniapp create CSV is running on port 127.0.0.1:${port}`));
