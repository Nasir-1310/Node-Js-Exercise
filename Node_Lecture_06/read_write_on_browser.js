const http=require('http');
const fs=require('fs');
const server=http.createServer((req, res)=>{
   const myReadString=fs.createReadStream(`${__dirname}/textFile.txt`, 'utf8');
   myReadString.pipe(res);
});

server.listen(3000)

console.log('Listening on the port number 3000');

