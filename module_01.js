// // particular function call

// function studentName(){
//     console.log(" Hi Ajay");
// }
// function studentAge(){
//     console.log(" I am 22 years old ")
// }
// // export is initially empty this object is exported from this module and
// //  available oustside
// module.exports.studentName = studentName;
// module.exports.studentAge = studentAge;

// console.log(__filename);
// console.log(__dirname);

// multiple function call 

// module.exports = {
//     // keyvalue pair
//     studentName : function studentName(){
//         console.log(" Hi Ajay");
//     } ,
//     studentAge: function studentAge(){
//         console.log(" I am 22 years old ");
//     }
// }

// // wrapper function 
// Wrapper function 

// is like a example of 
// exports.logger = logger;
// module.expoerts.logger = logger

// wrong exports = logger

// contains function (exports, require, exports, __filename,__dirname) different object arguments
// It creates a new scope for your module, so the variables you define won't 
// conflict with variables defined in other modules.
// It adds some helper objects and functions to your module scope, such as 
// exports, require, module, __filename, and __dirname.
// It ensures that your module's code is wrapped in a try-catch block, 
// which helps catch and handle any errors that might occur during execution.

function sum(num) {
    let res = Math.sqrt(num);
    console.log(res);

}

module.exports.sum = sum;