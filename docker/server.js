const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Informações do Host</h1>');
  res.write(`<p>Nome do Host: ${os.hostname()}</p>`);
  res.write(`<p>Endereço IP: ${getIpAddress()}</p>`);
  res.write(`<p>Hora do Host: ${getCurrentTime()}</p>`);
  res.end();
});

function getIpAddress() {
  const interfaces = os.networkInterfaces();
  for (const ifaceName in interfaces) {
    const iface = interfaces[ifaceName];
    for (const alias of iface) {
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return 'Endereço IP não encontrado';
}

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleString();
}

const port = 3000;
const HOST = 'localhost';
server.listen(port, () => {
  console.log(`Servidor está rodando em http://${HOST}:${port}`);
});
