let path=require("path");
let fs=require("fs");

let inputArr=process.argv.slice(2);
console.log(inputArr);

let filename=inputArr[0];
let content=inputArr[1];

//console.log("filename",filename);
// console.log("content",content);

let currentPath=process.cwd();
//console.log(currentPath);

let joinedPath=path.join(currentPath,"abc","def");
console.log(joinedPath);

// let file=path.basename("C://Users//admin//Desktop//JAVASCRIPT PROGRAMS//file organiser//path module//path.js");
// console.log(file);

// let extName=path.extname("C://Users//admin//Desktop//JAVASCRIPT PROGRAMS//file organiser//path module//path.js");
// console.log(extName);