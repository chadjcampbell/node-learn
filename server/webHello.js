#!/usr/bin/env node

const http = require("http");
const port = process.argv[2] || process.env.PORT || 3000;

function capitalize(string) {
  return string
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

http
  .createServer((req, res) => {
    if (req.url.includes("favicon.ico")) {
      res.statusCode = 404;
      res.end("Not Found");
      return;
    }
    console.log(req.url);
    const nameArg = capitalize(
      req.url
        .replace(/[^\w.,-]/g, " ")
        .replace(/\s+/g, " ")
        .trim() || "world"
    );
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<p>Hello ${nameArg}!</p>`);
  })
  .listen(port);

console.log(`Server running at http://localhost:${port}`);
