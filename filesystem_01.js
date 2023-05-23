// const fs = require('fs');

// reading the file asychrounus
// fs.readFile('./test.txt',(err,data)=>{
//     if(err){
//         console.log("failed to load");
//     }
//     else{
//         console.log(data.toString());
//     }
// });

// wrtting the file asychrounus
// fs.writeFile('./test.txt','writing new content in the file and deleting the original data in the file.',(err,data) =>{
//     if(err){
//         console.log("failed to load");
//     }
//     else{
//         console.log('written successfully');
//     }
// });

// updating the file asychrounus
// fs.appendFile('./test.txt','appending the content of the file ',(err,data) =>{
//     if(err){
//         console.log("failed to load");
//     }
//     else{
//     console.log('written successfully');
//     }
// });

// deleteing the file asychrounus
// fs.unlink('./test.txt',(err,data) =>{
//     if(err){
//     console.log("failed to load");
//     }
//     else{
//     console.log('deleted successfully');
//     }
// })

// const data = fs.readFileSync('./test.txt');
// console.log(data.toString());

// try {
//     const data = fs.readFileSync('./test.txt');
//     console.log(data.toString());
//   } catch (err) {
//     console.error(err);
//   } 

// const data = fs.writeFileSync('./test.txt');
// console.log(data);

// const data = fs.writeFileSync('./test.txt','hello this frm modification');
// console.log("written successfully");

// try{
//     const data = fs.writeSync('./test.txt','hello ');
//     console.log("written successfully ");
// }
// catch(err){
//     console.error(err);
// }

   
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    try{
        const data = fs.readFileSync('./test.txt'); //write a response to the client
        res.writeHead(200,{'Content-Type':'text/plain'}); //sending response 200{success} status code to client 
        res.end(data); //end the data response
    }
    catch(err){
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
});

server.listen(4000, () => {
    console.log('Server listening on port 4000');
});

