// server.js
// A basic web server using Node's built-in http module.
// Run with: node server.js
// Then open http://localhost:3000/ in your browser.

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`Request received for: ${req.url}`);

  if (req.url === "/") {
    res.end("Welcome to Node Server");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else if (req.url === "/contact") {
    res.end("Contact Page");
  } else {
    res.statusCode = 404;
    res.end("404 - Page Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
