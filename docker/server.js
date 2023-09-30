'use strict';

const express = require('express');

// Constants
const PORT = 30000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('MENSAGEM - COLOQUE AQUI');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});