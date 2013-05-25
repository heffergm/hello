var http = require('http');

http.createServer(function (request, response) {
      response.writeHead(200, {'Content-Type': 'text/plain'});
          response.end('PICKLES PICKLES 123, PICKLES PICKLES CANT YOU SEE\n');
}).listen(8080);

console.log('Server started')
