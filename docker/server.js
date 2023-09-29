const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Informações do Pod Kubernetes</h1>');
  res.write(`<p>Nome do Pod: ${process.env.HOSTNAME}</p>`);
  res.write(`<p>Endereço IP do Pod: ${getPodIpAddress()}</p>`);
  res.write(`<p>Hora do Servidor: ${getCurrentTime()}</p>`);
  res.end();
});

function getPodIpAddress() {
  const networkInterfaces = os.networkInterfaces();
  const iface = networkInterfaces['eth0'] || networkInterfaces['eth1'] || networkInterfaces['eth2'];
  if (iface) {
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

const port = 8080;
server.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});