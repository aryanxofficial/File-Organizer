let fs=require('fs');
const { type } = require('os');
let path =require('path');
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}
// srcpath=process.argv[2];
function organizeFn(srcPath){

    let entities=fs.readdirSync(srcPath);  //entities is an array of all files present int path of folder given
    let organizeFolder=path.join(srcPath,'organizedFiles');
    // console.log(organizeFolder);
    if(!fs.existsSync(organizeFolder)){
        fs.mkdirSync(organizeFolder);
    }

    for(let i=0;i<entities.length;i++){

        let file=entities[i];
        let filepath=path.join(srcPath,file);  //lstat sync mei always pass file path and not the filename
        if(fs.lstatSync(filepath).isFile()){   //checking ki hmare paas entities array mei file hi aayi hai coz folder ke liye error aayga as copyfilesync won't work
        // console.log(file);
            let type=checkType(file);
            let typeFolder=path.join(organizeFolder,type);
            if(!fs.existsSync(typeFolder)){
                fs.mkdirSync(typeFolder)
            }

            let src=path.join(srcPath,entities[i]);
            let dest=path.join(typeFolder,entities[i]);
            fs.copyFileSync(src,dest);
    }

        // console.log(typeFolder)

    }
}

function checkType(file){
    for(let type in types){            //this loop will navigate through all the keys of the object
        for(let ext of types[type]){   //it will traverse on the values of array in value
            if(path.extname(file).split('.')[1]==ext){  ////path.extname also include "." so we are splitting just to get the word (we want "pdf" not ".pdf")
                return type;
            }
        }
    }
    return 'others';
}


module.exports={
    organizeFn:organizeFn
};

//C://Users//admin//Desktop//dummyfolder