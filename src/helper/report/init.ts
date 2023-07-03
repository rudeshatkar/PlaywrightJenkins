const fs = require("fs-extra");

try{
    fs.ensueDir("test-results")
    fs.emptyDir("test-results")
}catch(error){
     console.log("Folder not created!" +error)
}