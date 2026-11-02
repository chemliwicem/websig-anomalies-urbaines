'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const url = 'http://127.0.0.1:8781/index.html';
const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, url).pathname;
  if (pathname !== '/' && pathname !== '/index.html') {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Fichier introuvable');
  }
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) { res.writeHead(500); return res.end('Lecture impossible'); }
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    });
    res.end(data);
  });
});
server.on('error', err => {
  console.error(err.code === 'EADDRINUSE'
    ? 'Port 8781 deja utilise. Si le serveur du sprint est deja lance, ouvrez ' + url
    : err.message);
  process.exitCode = 1;
});
server.listen(8781, '127.0.0.1', () => {
  console.log('Sprint 1 disponible : ' + url);
  console.log('Gardez cette fenetre ouverte. Ctrl+C pour arreter.');
});
