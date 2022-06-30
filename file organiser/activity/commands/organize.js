let fs=require('fs');
let path =require('path');
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}

function organizeFunction(givenPath){
    let mainDirPath=path.join("C://Users//admin//Desktop//JAVASCRIPT PROGRAMS//file organiser","organized files");
    if(!fs.existsSync(mainDirPath)){
        fs.mkdirSync(mainDirPath);
    }
    let filesArr=fs.readdirSync(givenPath);
    for(let file of filesArr){
        let extname=file.extname(file);
        if(typecheck(extname)){
            let media=path.join(maindirPath,"media")
            fs.mkdirSync(media);
            fs.copyFileSync(media,file);
        }
            
    }
}

function typecheck(extname){
    for(i=0;i<(person.media).length;i++){
        if(extname==person.media[i]){
            return true;
        }
    }
    return false;
}


// module.exports={
//     organizeFn:organizeFunction
// };
