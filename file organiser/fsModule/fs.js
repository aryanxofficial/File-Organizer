let fs=require('fs');
let path=require("path");
// let content =fs.readFileSync("f1.txt");
// console.log(content+""); //// empty string add krne se readable format mei convert hojata hai...alternative we can use utf-8

// fs.writeFileSync("abc.txt","have a great day");  ////craetes new file or overlpas existing one

// fs.appendFileSync("abc.txt","  bale bale shava shava");  ////append

// fs.unlinkSync("abc.txt"); ////to delete an existing file

////to make a folder
// fs.mkdirSync("path modules");

//// to delete a folder
// fs.rmdirSync("path modules");

////to check if a file exists
// console.log(fs.existsSync("fs.js"))


////status object of file/folder
// let statusObj=fs.lstatSync("f1.txt");
// console.log(statusObj);


////tells if the entered path is a file or folder ...int this case i m checking for f1.txt
// console.log(statusObj.isFile());
// console.log(statusObj.isDirectory());


////gives an array of all files present in folder
// let fileArr=fs.readdirSync("C://Users//admin//Desktop//JAVASCRIPT PROGRAMS//file organiser//directory");
// console.log(fileArr);


////copies the information of source path and over write it in destpath
let srcpath="C://Users//admin//Desktop//JAVASCRIPT PROGRAMS//file organiser//fsModule//f1.txt";
let destpath="C://Users//admin//Desktop//JAVASCRIPT PROGRAMS//file organiser//fsModule//f2.txt";
fs.copyFileSync(srcpath,destpath);

let tobecopiedfilename=path.basename(srcpath);
let dest=path.join("C://Users//admin//Desktop//JAVASCRIPT PROGRAMS//file organiser//directory",tobecopiedfilename);
console.log(dest);
fs.copyFileSync(srcpath,dest);