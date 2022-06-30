let helpObj=require("./commands//help");
let treeObj=require("./commands/tree");
let organizeObj=require("./commands/organize2");

let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];


switch(command){
    case "help":
        helpObj.helpFn();
        break;
    
    case "tree":                //while giving path always send the path in " " and also correct the back slashes
        treeObj.treeFn(path);
        break;

    case "organize":
        organizeObj.organizeFn(path);
        break;

    default:
        console.log("invalid command");
}


//C://Users//admin//Desktop//dummyfolder