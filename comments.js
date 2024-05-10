// Create web server
// Run: node comments.js
// Access: http://localhost:3000

const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname + ".html";

    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(3000);