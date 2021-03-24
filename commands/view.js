let fs=require("fs");
let pathmodule=require("path");
//check if the type of file print structure is valid or not
//check if dir is correct or not
//based on respective type print the file structure

function corrPath(dirpath){
    return fs.existsSync(dirpath);
}

function printTree(dirpath,space){
    console.log(space,pathmodule.basename(dirpath));
    
    if(fs.lstatSync(dirpath).isDirectory()){
        let children=fs.readdirSync(dirpath);
        for(let i=0;i<children.length;i++){
            printTree(pathmodule.join(dirpath,children[i]),space+"\t");
        }
    }
    
}

function printFlat(dirpath){
    console.log(dirpath);
    if(fs.lstatSync(dirpath).isDirectory()){
        let children=fs.readdirSync(dirpath);
        for(let i=0;i<children.length;i++){
            printFlat(pathmodule.join(dirpath,children[i]));
        }
    }

}

function fn(type,dirpath){
    if(type=="tree"){
        if(corrPath(dirpath)){
            printTree(dirpath,"");
        }else{
            console.log("Given Path was wrong");
        }
    }else{
        if(type=="flat"){
            if(corrPath(dirpath)){
                printFlat(dirpath);
            }else{
                console.log("Given Path was wrong");
            }
        }else{
            console.log("wrong command");
        }
    }
}

module.exports={
    fn:fn
}