const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-Type' : 'text/plain'});
  res.end(`[v2] Hostname: ${os.hostname}\n`);
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});