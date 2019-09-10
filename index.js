let app = require('express')();
let http = require('http').createServer(app);

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});