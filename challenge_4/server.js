
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./client/dist'))
app.listen(port, () => console.log(`Miniapp Connect Four Board is running on port 127.0.0.1:${port}`));
