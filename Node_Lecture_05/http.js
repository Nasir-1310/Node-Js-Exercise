const http=require('http');
const server=http.createServer((req, res)=>{
    if(req.url=='/'){
        res.write('Hellow programmer');
        res.write('i am started node.js');
        res.end();

    }
    else if(req.url=='/about'){
        res.write('This is about us page');
        res.end();
    }
 
    else{
        res.write('Not found');
        res.end();
    }

});

// server.on('connection',()=>{
//     console.log('New connection>>>');
// })



server.listen(3000)//port number is 3000

console.log('Listening on the port number 3000');

