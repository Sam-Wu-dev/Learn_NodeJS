import { readFile } from 'fs';
import { createServer } from 'http';

createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    readFile('myfirst.html', function(err, data) { // callback function
        res.end(data);
    });
}).listen(8080);