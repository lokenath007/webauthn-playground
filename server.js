const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 443; // Default HTTPS port

const options = {
  key: fs.readFileSync('/etc/ssl/private/key-passkey-simulator.key'),
  cert: fs.readFileSync('/etc/ssl/certs/cert-passkey-simulator.crt'),
};

app.use(express.static(__dirname));
const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});