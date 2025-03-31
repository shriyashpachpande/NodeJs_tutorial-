// console ye global module hai 
// or jo import karne padte hai oo non global hai 

console.log("Hello World!");

// now importing "fs"
const fs = require('fs');
fs.writeFileSync("hello.txt","Here is creating a file...");

// for directoryy name
console.log(__dirname)

// for the file name 
console.log(__filename)
const gs = require('fs').writeFileSync;
gs("xyz.txt","here is reduced the code");