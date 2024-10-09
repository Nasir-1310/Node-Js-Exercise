const http=require('http');
const server=http.createServer((req, res)=>{
    if(req.url=='/'){
        res.write('<html><head><title>Form</title></head><body><form method="post" action="/about"><input type="text" name="message"><button type="submit">Submit</button></form></body></html>');
        res.end();

    }
    else if(req.url=='/about'&& req.method=='POST'){
        const body=[];
        req.on('data',(chunk)=>{
          body.push(chunk);
        })

        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            console.log(parseBody);
            res.write('thank for submit the form');
            res.end();
        })

       
    }
 
    else{
        res.write('Not found');
        res.end();
    }

});

server.listen(3000)

console.log('Listening on the port number 3000');

