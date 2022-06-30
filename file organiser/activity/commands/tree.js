//we will pass a path and this function has to dispplay all the files or folder present inside that path.
let fs=require("fs");
let path=require("path");

// pathoffile=process.argv[2];
function treefunction(pathoffile){
    console.log("welcome inside the tree function");
    let fileArr=fs.readdirSync(pathoffile);
    for(let i=0;i<fileArr.length;i++){
        console.log(fileArr[i]);
    }
//     // console.log("welcome inside the tree function");
}

module.exports={
    treeFn:treefunction
};

//C://Users//admin//Desktop//JAVASCRIPT PROGRAMS//file organiser

