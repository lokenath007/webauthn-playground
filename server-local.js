const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 443; // HTTPS default port

// Create an HTTPS server using the generated certificate and private key
const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem'),
};

const server = https.createServer(options, app);

app.use(express.static(__dirname));

server.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});




