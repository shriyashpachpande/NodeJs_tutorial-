const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'CRUD')
const filePath = `${dirPath}/apple.txt`;
//1 creating file

// fs.writeFileSync(filePath,'This is a simple file');

//2 reading
// fs.readFile(filePath, 'utf8',(err,item)=>{
//     console.log(item)
// })

//3 update file

// fs.appendFile(filePath,' and file name is apple.tx' ,(err)=>{
//     if(!err) console.log('File is updated')
// })

// 4 rename file 
fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
    if(!err) console.log('File is updated')
})
 
//5 delete
fs.unlinkSync(`${dirPath}/fruit.txt`) 