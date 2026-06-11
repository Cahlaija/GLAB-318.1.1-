const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
    switch (req.url) {
      case "/":
        res.write("You made it!");
        break;
      case "/End":
        res.write("The End.");
        break;
      default:
        res.statusCode = 404;
        res.write("Error: 404 Not Found");
        break;
    }
  res.write('<h1 style="color: red">Hello World!</h1>');
  res.write('<p>I wonder what else we can send...</p>');
  res.end();
});