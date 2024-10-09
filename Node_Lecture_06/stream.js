const fs=require('fs');

const ourReadStream=fs.createReadStream(`${__dirname}/textFile.txt`);
ourReadStream.on('data',(chunk)=>{
    console.log(chunk.toString());
})

console.log('hellow');
