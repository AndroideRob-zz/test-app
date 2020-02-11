var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.json({ limit: '500kb' }));
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;

app.get('/', (req, res) => res.send('Testing application'));

app.get('/success', (req, res) => res.send(200));

app.get('/error', (req, res) => res.send(500));

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
