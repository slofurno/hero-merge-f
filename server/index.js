var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
  fs.readFile('server/heroes.json', (err, data) => {
    if(err)console.log(err);
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    res.end(data);
  });
});

server.listen(4001);
