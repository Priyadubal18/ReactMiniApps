const express = require('express');
const app = express();
const port = 3000;

//app.use(express.static('client'));
app.use(express.json());
app.use(express.urlencoded())
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', { test: '' });
    // res.send();
});

app.post('/upload_json', function (req, res) {
    let inputdata = JSON.parse(req.body.message);
    let result = pasrJson(inputdata);
    console.log(result);
    //result = result.replace(/\n/g, "<br />");
    res.render('index', {
        'test': result
    });
    //res.send(result);
});

function pasrJson(data) {
    var s = '';
    Object.keys(data).forEach(key => {
        if (!Array.isArray(data[key]) || ! typeof data[key] === 'object')
            s += `${key}, `;
    });

    function parseProperties(obj) {
        s += `\n`;
        for (var key in obj) {
            if (!Array.isArray(data[key]) || ! typeof data[key] === obj) {
                s += `${obj[key]}, `;
            } else {
                if (Array.isArray(obj[key])) {
                    for (var i = 0; i < obj[key].length; i++) {
                        parseProperties(obj[key][i]);
                    }
                } else {
                    parseProperties(obj[key]);
                }
            }
        }
    }
    parseProperties(data);
    return s;
}

app.listen(port, () => console.log(`Miniapp create CSV is running on port 127.0.0.1:${port}`));
