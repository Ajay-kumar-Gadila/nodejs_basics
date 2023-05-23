// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   if (req.url === '') {
//     // Read the contents of the HTML file
//     fs.readFile('index.html', (err, data) => {
//       if (err) {
//         res.writeHead(500);
//         return res.end('Error loading index.html');
//       }

//       // Send the HTML file as the response
//       res.writeHea d(200, { 'Content-Type': 'text/html' });
//       res.end(data);
//     });
//   } else {
//     res.writeHead(404);
//     res.end('Page not found');
//   }
// });

// server.listen(port, () => {
//   console.log('Server running on port 3000');
//   let option = {
//     port:5050
//   };
// });


