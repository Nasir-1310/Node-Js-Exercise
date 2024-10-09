const fs=require('fs');

fs.writeFileSync('file1.txt', 'I am Nasir');
fs.appendFileSync('file1.txt','i am learning node.js');

fs.readFile('file1.txt',(err, data)=>{
    console.log(data.toString());
});

console.log('i am out');


// const file=fs.readFile('file1.txt',function(err){
//     if(err) throw err;
    
// });
// console.log(file);