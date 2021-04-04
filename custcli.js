#! /usr/bin/env node
let viewfile=require("./commands/view.js");
let helpfile=require("./commands/help.js");
let organizefile=require("./commands/organize.js");


//take input -> node custcli.js hello hai
//it's output is an array [ 'hello', 'hai' ]. if command line input <= input of slice then empty array
let input=process.argv.slice(2);

//find type of command
command=input[0];

//based on type of command do respective file exectution
//after making the custcli global you have to replace node custcli.js with custcli in below command examples
switch(command){
    //view command example : node custcli.js view tree "directory path in double quotes"
    case "view":
        viewfile.fn(input[1],input[2]);
        break;

    //organize command example : node custcli.js organize "directory path in double quotes"
    //orgnaize will also work if you don't give directory path.
    case "organize":
        organizefile.fn(input[1]);
        break;
    case "help":
        helpfile.fn();
        break;
    default: console.log("wrong command");
}