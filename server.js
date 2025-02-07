const http = require('http');

const server = http.createServer((req, res) => {
  // Without setting the Content-Length header,
  // the response might be incomplete or chunked,
  // leading to unexpected behavior in certain clients.
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});