const express = require('express');
const app = express();
const hostname = '0.0.0.0'; // Listen on all available network interfaces
const port = 3000; // Port number of your choice


app.use(express.static(__dirname)); // Serve files from the current directory

app.listen(port, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});