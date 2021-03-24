#! /usr/bin/env node
let viewfile=require("./commands/view.js");
let helpfile=require("./commands/help.js");
let organizefile=require("./commands/organize.js");

//take input
let input=process.argv.slice(2);

//find type of command
command=input[0];

//based on type of command do respective file exectution
switch(command){
    case "view":
        viewfile.fn(input[1],input[2]);
        break;
    case "organize":
        organizefile.fn(input[1]);
        break;
    case "help":
        helpfile.fn();
        break;
    default: console.log("wrong command");
}