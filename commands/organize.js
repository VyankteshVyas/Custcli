let fs=require("fs");
let pathmodule=require("path");
let myfiletypes=require("../util.js");
let orgdir;

function corrPath(dirpath){
    return fs.existsSync(dirpath);
}

function makeorganize(dirpath){
    let organizepath=pathmodule.join(dirpath,"organize");
    fs.mkdirSync(organizepath);
    fs.mkdirSync(pathmodule.join(organizepath,"media"));
    fs.mkdirSync(pathmodule.join(organizepath,"archives"));
    fs.mkdirSync(pathmodule.join(organizepath,"documents"));
    fs.mkdirSync(pathmodule.join(organizepath,"app"));
    fs.mkdirSync(pathmodule.join(organizepath,"other"));
    
}

function filetype(dirpath){
    let extname=pathmodule.extname(dirpath);
    extname=extname.split(".")[1];
    let mediaexts=myfiletypes.types.media;
    let archivesexts=myfiletypes.types.archives;
    let documentexts=myfiletypes.types.documents;
    let appexts=myfiletypes.types.app;
    for(let i=0;i<mediaexts.length;i++){
        if(extname==mediaexts[i]){
            return "media";
        }
    }
    for(let i=0;i<archivesexts.length;i++){
        if(extname==archivesexts[i]){
            return "archives";
        }
    }
    for(let i=0;i<documentexts.length;i++){
        if(extname==documentexts[i]){
            return "documents";
        }
    }
    for(let i=0;i<appexts.length;i++){
        if(extname==appexts[i]){
            return "app";
        }
    }
    return "other";
    
}

function copyfiles(dirpath){
    if(!fs.lstatSync(dirpath).isFile()){
        let children=fs.readdirSync(dirpath);
        for(let i=0;i<children.length;i++){
            copyfiles(pathmodule.join(dirpath,children[i]));
        }
    }else{
        let filecategory=filetype(dirpath);
        let destpath=pathmodule.join(orgdir,"organize");
        destpath=pathmodule.join(destpath,filecategory);
        destpath=pathmodule.join(destpath,pathmodule.basename(dirpath));
        fs.copyFileSync(dirpath,destpath);
    }
}


function fn(dirpath){
    //check if dirpath is given or not.
    //If given then check if directory path is right
    //get children of this directory
    //search if organize folder already exists. if not create one with all subfolers. 
    //else just create organize folder. it will replace pre exissting organize folder
    //now traverse whole directory recurrsively and put copy of each file based on their extension
    if(dirpath==undefined){
        //process.cwd() returns directory where command has been executed(not directory of the node package)
        dirpath=process.cwd();
    }
    if(corrPath(dirpath)){
        orgdir=dirpath;
        makeorganize(dirpath);
        let children = fs.readdirSync(dirpath);
        for(let i=0;i<children.length;i++){
            if(children[i]!="organize"){
                copyfiles(pathmodule.join(dirpath,children[i]));
            }
        }
    }else{
        console.log("wrong command");
    }
}

module.exports={
    fn:fn
}