const http = require('http');

const server = http.createServer(function (req, res){
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write("hello man");
    res.end();
});

server.listen(5555,() =>{
    console.log("Server is running ....");
})

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   const filePath = '.' + req.url;
  
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       res.writeHead(404, { 'Content-Type': 'text/plain' });
//       res.write('File not found');
//       res.end();
//     } else {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.write(data);
//       res.end();
//     }
//   });
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });
