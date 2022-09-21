var fs = require('fs')

var content = "\nHi \nHola \nHow are you?"
fs.appendFile('8.txt',content,function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("File appended successfully.")
    }
});