var people=['nasir','rumi'];
var a=6;
function test(){
    console.log("i am from function");
}
module.exports=people;

module.exports={
    people:people,
    a: a,
    test:test
}

// module.exports={
//     people,
//     a,
//     test,
// }
// console.log(module);