let str="hello my name is aryan"
let a=10;
function foo(msg){
    return "hi i was made in owner.js"+msg
}
console.log("hello aryan i was made in owner.js");

// module.exports=str;   when we have to export just one particular function

module.exports={
    var:a,
    string:str,
    fooFunc:foo
};