let fs=require("fs");
let pathmodule=require("path");
//check if the type of file print structure is valid or not
//check if dir is correct or not
//based on respective type print the file structure


//checks if the path exists or not
function corrPath(dirpath){
    return fs.existsSync(dirpath);
}


//prints the file structure in tree format. Example output is given at end of the code in this file
function printTree(dirpath,space){
    console.log(space,pathmodule.basename(dirpath));
    
    if(fs.lstatSync(dirpath).isDirectory()){
        let children=fs.readdirSync(dirpath);
        for(let i=0;i<children.length;i++){
            printTree(pathmodule.join(dirpath,children[i]),space+"\t");
        }
    }
    
}

//prints the file structure in flat format. Example output is given at end of the code in this file
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


// Tree example output:
// Competitive Programming Contest Problems Coding Blocks
//          10 Days of Code Contest
//                  Making Ganesha's Pattern.cpp
//          Sorting Algorithms
//                  Bubble Sort.cpp
//                  Insertion Sort.cpp
//                  Merge Sort.cpp
//                  Quick Sort.cpp
//                  Selection Sort.cpp

//  Flat example output:
//  D:\Competitve Programming\Competitive Programming Contest Problems Coding Blocks
// D:\Competitve Programming\Competitive Programming Contest Problems Coding Blocks\10 Days of Code Contest
// D:\Competitve Programming\Competitive Programming Contest Problems Coding Blocks\10 Days of Code Contest\Making Ganesha's Pattern.cpp
// D:\Competitve Programming\Competitive Programming Contest Problems Coding Blocks\Sorting Algorithms
// D:\Competitve Programming\Competitive Programming Contest Problems Coding Blocks\Sorting Algorithms\Bubble Sort.cpp
// D:\Competitve Programming\Competitive Programming Contest Problems Coding Blocks\Sorting Algorithms\Insertion Sort.cpp
// D:\Competitve Programming\Competitive Programming Contest Problems Coding Blocks\Sorting Algorithms\Merge Sort.cpp
// D:\Competitve Programming\Competitive Programming Contest Problems Coding Blocks\Sorting Algorithms\Quick Sort.cpp
// D:\Competitve Programming\Competitive Programming Contest Problems Coding Blocks\Sorting Algorithms\Selection Sort.cpp
