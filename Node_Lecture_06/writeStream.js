const fs=require('fs');

const ourReadStream=fs.createReadStream(`${__dirname}/textFile.txt`);
const ourWriteStream=fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on('data',(chunk)=>{
//     ourWriteStream.write(chunk);

// })
//or---
//using pipe
ourReadStream.pipe(ourWriteStream);

console.log('hellow');
