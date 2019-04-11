const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))
app.listen(port, () => console.log(`Miniapp checkout is running on port 127.0.0.1:${port}`));

