var http = require('http');

http.createServer(function (request, response) {
      response.writeHead(200, {'Content-Type': 'text/plain'});
          response.end('HELLO YOU CRAZY WORLD\n');
}).listen(8080);

console.log('Server started')
