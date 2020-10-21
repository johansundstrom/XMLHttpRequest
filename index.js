let express = require('express');
let hostname = 'localhost';
let port = process.env.port || 3000;
let app = express();

app.get('/', function(req, res) {
    res.send();
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
