const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.write('<h1 style="color: red">Hello World!</h1>');
      res.write('<p>I wonder what else we can send...</p>');
      break;

    case "/End":
      res.statusCode = 200;
      res.write("<h1>The End.</h1>");
      res.write("<p>You reached the end route.</p>");
      break;

    default:
      res.statusCode = 404;
      res.write("<h1>Error: 404 Not Found</h1>");
      break;
  }

  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});