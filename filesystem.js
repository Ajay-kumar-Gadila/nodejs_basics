const fs =  require('fs');

// fs.readFile('path/to/file.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });

// the files that are there in the folder src below 
// this is about synchronous
const file = fs.readdirSync('./');
console.log(file);

fs.readdir('./',function(err,file){
    if(err) console.log('Error',err);
    else console.log('Result',file);
});


