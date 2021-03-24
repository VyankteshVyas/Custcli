function helperfn(){
    console.log(`List of all the commands:
                        custcli view flat <dir-name>
                        custcli view tree <dir-name>
                        custcli organize <dir-name>
                        custcli organize
                        custcli help`);
}

module.exports={
    fn:helperfn
}

