var fs = require('fs')

var content = '<html><head><title>A Simple HTML Document</title></head><body><p>This is a very simple HTML document</p><p>It only has two paragraphs</p></body></html>'
fs.writeFile('3.html',content,err => {
    if(err){
        console.error(err)
    }
    console.log('File created Successfully.')
});